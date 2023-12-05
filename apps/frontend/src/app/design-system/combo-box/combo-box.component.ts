import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { v4 as uuidv4} from 'uuid';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'product-feedback-app-combo-box',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './combo-box.component.html',
  styleUrl: './combo-box.component.css'
})
export class ComboBoxComponent{
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
