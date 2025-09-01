import { Component, computed, input } from '@angular/core';
import { TicketModel } from '@core/models/ticket.model';
import { AvatarModule } from 'primeng/avatar'
import { TranslateModule } from '@ngx-translate/core';
import { TICKET_PRIORITIES_INFO, TICKET_TYPE_INFO } from '@core/constants/project.constant';


@Component({
  selector: 'q-ticket-card',
  imports: [AvatarModule, TranslateModule],
  templateUrl: './ticket-card.component.html',
  styleUrl: './ticket-card.component.scss'
})
export class TicketCardComponent {
  item = input.required<TicketModel>();
  ticketTypeInfo = computed(() => TICKET_TYPE_INFO[this.item().type]);
  ticketPriorityInfo = computed(() => TICKET_PRIORITIES_INFO[this.item().priority]);
}
