import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from '../../design-system/button.directive';

@Component({
  selector: 'product-feedback-app-no-feedback',
  standalone: true,
  imports: [CommonModule, ButtonDirective],
  templateUrl: './no-feedback.component.html',
  styleUrl: './no-feedback.component.css',
})
export class NoFeedbackComponent {}
