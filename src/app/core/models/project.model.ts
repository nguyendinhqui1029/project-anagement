import { ProjectStatus } from "@core/enums/project.enum";
import { UserModel } from "@core/models/user.model";
import { BoardModel } from "@core/models/board.model";

export interface ProjectModel {
  id: number;
  name: string;
  description: string;
  status: ProjectStatus;
  participants: UserModel[];
  startDate: Date;
  endDate: Date;
  isUnlimited: boolean;
  projectProgress: number;
  boards: BoardModel[];
  createdAt: string;
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