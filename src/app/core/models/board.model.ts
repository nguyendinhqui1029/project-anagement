import { TicketModel } from "@core/models/ticket.model";
import { ProjectModel } from "./project.model";

export interface BoardModel {
  id: string;
  name: string;
  project: ProjectModel;
  isDefault: boolean;
  tickets: TicketModel[];
  createdAt?: string;
  updatedAt?: string;
}
