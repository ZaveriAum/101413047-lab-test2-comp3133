import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})

export class MissionFilterComponent {
  @Output() filterChanged = new EventEmitter<string>();

  onFilterChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.filterChanged.emit(target.value);
  }
}
