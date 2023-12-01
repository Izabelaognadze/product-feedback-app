import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-feedback-app-combo-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './combo-box.component.html',
  styleUrl: './combo-box.component.css'
})
export class ComboBoxComponent{
  sort = [
    {id : 1, sort : 'Most Upvotes'},
    {id : 2, sort : 'Least Upvotes'},
    {id : 3, sort : 'Most Comments'},
    {id : 4, sort : 'Least Comments'},
  ]

}
