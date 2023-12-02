import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { v4 as uuidv4} from 'uuid'

@Component({
  selector: 'product-feedback-app-combo-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './combo-box.component.html',
  styleUrl: './combo-box.component.css'
})
export class ComboBoxComponent{
  sort = [
    {id : uuidv4(), sort : 'Most Upvotes'},
    {id : uuidv4(), sort : 'Least Upvotes'},
    {id : uuidv4(), sort : 'Most Comments'},
    {id : uuidv4(), sort : 'Least Comments'},
  ]

}
