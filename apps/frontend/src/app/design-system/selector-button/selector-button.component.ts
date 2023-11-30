import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-feedback-app-selector-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selector-button.component.html',
  styleUrl: './selector-button.component.css'
})
export class SelectorButtonComponent {
  @Input() public text = '';
}
