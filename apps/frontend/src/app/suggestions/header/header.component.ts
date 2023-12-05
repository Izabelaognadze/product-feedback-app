import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonDirective} from '../../design-system/button.directive';
import { SortByList } from '../../shared/constants/sort-by-list'

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
  sortByList = SortByList

  onSortChange(event: Event) {
    this.selectedSort = (event.target as HTMLSelectElement).value;
  }
}
