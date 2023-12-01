import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Selector } from '../../shared/models/selectors';

@Component({
  selector: 'product-feedback-app-selector-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selector-button.component.html',
  styleUrl: './selector-button.component.css'
})
export class SelectorButtonComponent {
  selector : Selector[]=[]
  
  constructor(){
    this.selector = [
      {
        id:1,
        name : 'All'
      },
      {
        id:2,
        name : 'UI'
      },
      {
        id:3,
        name : 'UX'
      },
      {
        id:4,
        name : 'Enhancement'
      },
      {
        id:5,
        name : 'Bug'
      },
      {
        id:6,
        name : 'Feature'
      },
    ]
  }
}
