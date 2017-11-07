import {AfterContentInit, Component, OnDestroy} from '@angular/core';
import {Semester} from '../../models/semester.model';
import {BackendService} from '../../backend.service';
import {Curriculum} from '../../models/curriculum.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-module-overview',
  templateUrl: './module-overview.component.html',
  styleUrls: ['./module-overview.component.scss'],
})
export class ModuleOverviewComponent implements AfterContentInit, OnDestroy {
  semesters: Semester[];
  curricula: Curriculum[];

  selectedCurriculum: Curriculum;
  selectedCurriculumName: string;

  routeSubscription: Subscription;
  selectedCurriculumId: number = -1;

  constructor(private backendService: BackendService, private router: Router, private route: ActivatedRoute) {
    this.curricula = [];
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  onSelect(curriculum: Curriculum): void {
    this.selectedCurriculum = curriculum;
    this.selectedCurriculumName = curriculum.name;
    this.selectedCurriculumId = curriculum.id;
    this.getSemesters(curriculum.id);
  }
  clickSemester(semester: number): void {
    this.router.navigate(['/curriculum/', this.selectedCurriculum.id, this.selectedCurriculum.name, 'semesters', semester ]);
  }
  onClick(module_code: string): void {
    this.router.navigate(['/curriculum/', this.selectedCurriculum.id, 'modules', module_code]);
  }

  getSemesters(curriculumId: number): void {
      this.backendService.getSemesters(curriculumId)
        .subscribe(semesters => this.semesters = semesters);
  }

  getCurriculum(): void {
    this.backendService.getCurricula()
      .subscribe(curricula => {
        this.curricula = curricula;

        if (this.selectedCurriculumId > 0) {
          curricula.forEach(cur => {
            if (cur.id == this.selectedCurriculumId) {
              this.selectedCurriculum = cur;
              this.selectedCurriculumName = cur.name;

              this.getSemesters(this.selectedCurriculumId);
            }
          });
        }
      });
  }

  ngAfterContentInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      if (params && params['curriculum']) {
        const curriculum = params['curriculum'];
        if (curriculum !== null && curriculum > 0) {
          this.selectedCurriculumId = curriculum;
        }
      }

      this.getCurriculum();
    });
  }

}
