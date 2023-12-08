import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from '../../design-system/button.directive';
import { SortByList } from '../../shared/constants/sort-by-list';
import { DropdownComponent } from '../../design-system/dropdown/dropdown.component';

@Component({
  selector: 'product-feedback-app-header',
  standalone: true,
  imports: [CommonModule, ButtonDirective, DropdownComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  dropdownOpen = false;
  suggestions = 5;
  selectedSort: string = 'Most Upvotes';
  sortByList = SortByList

  getSortByList(): string[] {
    return this.sortByList.map(item => item.sort);
  }

  onItemSelected(item: string) {
    this.selectedSort = item;
    this.dropdownOpen = false;
  }
}
