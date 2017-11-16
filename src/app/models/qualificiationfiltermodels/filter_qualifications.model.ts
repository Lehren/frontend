import {Curriculum} from '../curriculum.model';
import {LifecycleActivity} from '../lifecycleactivity';
import {ArchitecturalLayer} from '../architecturallayer';

export interface FilterQualifications {
  curricula: Curriculum[];
  lifecycle_activities: LifecycleActivity[];
  architectural_layers: ArchitecturalLayer[];
}