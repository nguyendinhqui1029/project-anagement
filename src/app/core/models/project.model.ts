import { ProjectStatus } from "@core/enums/project.enum";

export interface ProjectModel {
  id: string;
  name: string;
  status: ProjectStatus;
  memberCount: number;
  startDate: Date;
  endDate: Date;
  projectProgress: number;
}
