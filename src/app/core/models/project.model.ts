import { ProjectStatus } from "@core/enums/project.enum";
import { UserModel } from "@core/models/user.model";
import { BoardModel } from "@core/models/board.model";

export interface ProjectModel {
  id: number;
  name: string;
  status: ProjectStatus;
  participants: UserModel[];
  startDate: Date;
  endDate: Date;
  projectProgress: number;
  boards: BoardModel[];
}

export interface ProjectRequestBody {
  name: string;
  description: string;
  startDate: number | undefined;
  endDate: number | undefined;
  isUnlimited: boolean;
  owner: {id:number};
  participants: {id: number}[];
}