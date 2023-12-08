import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-feedback-app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
})
export class DropdownComponent {
  @Input() content:string[]=[];
  @Output() itemSelected = new EventEmitter<string>();

  selectItem(item: string) {
    this.itemSelected.emit(item);
  }
}
