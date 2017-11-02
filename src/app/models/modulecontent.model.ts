import {LearningGoal} from './learninggoal';
import {ArchitecturalLayer} from './architecturallayer';
import {LifecycleActivity} from './lifecycleactivity';
import {StudentSkill} from './studentskill';
import {PriorKnowledgeReferenceModel} from './prior_knowledge_reference.model';

export interface ModuleContent {
  module_code: string;
  module_name: string;
  credits: number;
  semester: number;
  lectures_in_week: number;
  practical_hours_week: number;
  total_effort: number;
  lecturers: string[];
  credentials: string;
  introductorytext: string;
  qualifications: StudentSkill[];
  topics: string[];
  teaching_material: string;
  prior_knowledge_references: PriorKnowledgeReferenceModel[];
  additional_information: string;
  architectural_layers: ArchitecturalLayer[];
  lifecycle_activities: LifecycleActivity[];
  learning_goals: LearningGoal[];
}
