import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackBoardComponent } from '../side-menu/feedback-board/feedback-board.component'
import {SelectorButtonComponent} from '../design-system/selector-button/selector-button.component';
import { VoteCounterComponent } from '../design-system/vote-counter/vote-counter.component';
import { ComboBoxComponent } from '../design-system/combo-box/combo-box.component'

@Component({
  selector: 'product-feedback-app-feedback-app',
  standalone: true,
  imports: [CommonModule, FeedbackBoardComponent, SelectorButtonComponent, VoteCounterComponent, ComboBoxComponent],
  templateUrl: './feedback-app.component.html',
  styleUrl: './feedback-app.component.css',
})
export class FeedbackAppComponent {}
