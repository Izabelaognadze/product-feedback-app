import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from '../../design-system/button.directive';
import { Roadmap } from '../../shared/constants/roadmap';

@Component({
  selector: 'product-feedback-app-roadmap',
  standalone: true,
  imports: [CommonModule, ButtonDirective],
  templateUrl: './roadmap.component.html',
  styleUrl: './roadmap.component.css',
})
export class RoadmapComponent {
  roadmap = Roadmap
}
