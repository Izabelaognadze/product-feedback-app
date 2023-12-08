import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FeedbackBoardComponent} from '../suggestions/feedback-board/feedback-board.component';
import {HeaderComponent} from './header/header.component';
import { NoFeedbackComponent } from './no-feedback/no-feedback.component'

@Component({
  selector: 'product-feedback-app-suggestions',
  standalone: true,
  imports: [CommonModule, FeedbackBoardComponent, HeaderComponent, NoFeedbackComponent],
  templateUrl: './suggestions.component.html',
  styleUrl: './suggestions.component.css',
})
export class SuggestionsComponent {

}
