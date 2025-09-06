import { Component, computed, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TicketModel } from '@core/models/ticket.model';
import { TICKET_PRIORITIES_INFO, TICKET_TYPE_INFO } from '@core/constants/project.constant';
import { PrimeNgImportsModule } from '@core/modules/primeng.module';
@Component({
  selector: 'q-ticket-item',
  imports: [ PrimeNgImportsModule, TranslateModule],
  templateUrl: './ticket-item.component.html',
  styleUrl: './ticket-item.component.scss'
})
export class TicketItemComponent {
  item = input.required<TicketModel>();
   ticketTypeInfo = computed(() => TICKET_TYPE_INFO[this.item().type])
  ticketPriorityInfo = computed(() => TICKET_PRIORITIES_INFO[this.item().priority])
}
