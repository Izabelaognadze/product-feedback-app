import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-feedback-app-vote-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vote-counter.component.html',
  styleUrl: './vote-counter.component.css'
})
export class VoteCounterComponent {
  @Input() public text='';
}
