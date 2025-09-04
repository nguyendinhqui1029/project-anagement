import { ProjectStatus } from "@core/enums/project.enum";
import { UserModel } from "@core/models/user.model";
import { BoardModel } from "@core/models/board.model";

export interface ProjectModel {
  id: string;
  name: string;
  status: ProjectStatus;
  participants: UserModel[];
  startDate: Date;
  endDate: Date;
  projectProgress: number;
  boards: BoardModel[];
}
