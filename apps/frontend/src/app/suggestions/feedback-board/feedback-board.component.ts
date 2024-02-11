import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-feedback-app-feedback-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback-board.component.html',
  styleUrl: './feedback-board.component.css',
})
export class FeedbackBoardComponent {
  @Input() public toggleOn = false;

  toggleMenu() {
    this.toggleOn = !this.toggleOn;
  }
}
