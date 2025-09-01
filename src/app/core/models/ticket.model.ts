import { TicketPriority, TicketStatus, TicketType } from "@core/enums/project.enum";
import { UserModel } from "@core/models/user.model";

export interface TicketHistory {
  status: TicketStatus;
  date: Date;
  updateBy: UserModel;
}

export interface Sprint {
  startDate: Date;
  endDate: Date;
  sprint: number;
}
export interface TicketModel {
  id: string;
  title: string;
  status: TicketStatus;
  description: string;
  type: TicketType;
  priority: TicketPriority;
  reported: UserModel;
  assignee: UserModel;
  sprint?: Sprint[];
  ticketHistory?: TicketHistory[]
}

export interface ColumnBoardModel {
  status: TicketStatus;
  tickets: TicketModel[];
}
