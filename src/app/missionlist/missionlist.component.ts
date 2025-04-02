import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceXService } from '../services/space-x.service';

@Component({
  selector: 'app-missionlist',
  imports: [CommonModule],
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css'
})

export class MissionlistComponent implements OnInit {
  missions: any[] = [];
  filteredMissions: any[] = [];

  constructor(private spaceXService: SpaceXService) {}

  ngOnInit(): void {
    this.spaceXService.getLaunches().subscribe((data) => {
      this.missions = data;
      this.filteredMissions = data;
    });
  }

  filterMissions(year: string) {
    if (year) {
      this.filteredMissions = this.missions.filter(mission => mission.launch_year === year);
    } else {
      this.filteredMissions = [...this.missions];
    }
  }
}
