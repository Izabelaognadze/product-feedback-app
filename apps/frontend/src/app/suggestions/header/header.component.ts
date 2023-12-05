import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonDirective} from '../../design-system/button.directive';
import {v4 as uuidv4} from 'uuid'

@Component({
  selector: 'product-feedback-app-header',
  standalone: true,
  imports: [CommonModule, ButtonDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  dropdownOpen = false;
  selectedSort: string = 'Most Upvotes';

  sort = [
    {id : uuidv4(), sort : 'Most Upvotes'},
    {id : uuidv4(), sort : 'Least Upvotes'},
    {id : uuidv4(), sort : 'Most Comments'},
    {id : uuidv4(), sort : 'Least Comments'},
  ]

  onSortChange(event: Event) {
    this.selectedSort = (event.target as HTMLSelectElement).value;
  }
}
