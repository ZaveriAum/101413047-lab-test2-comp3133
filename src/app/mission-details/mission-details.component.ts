import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SpaceXService } from '../services/space-x.service';

@Component({
  selector: 'app-mission-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.css']
})

export class MissionDetailsComponent implements OnInit{
  missionId: number = 1;
  missionDetails: any = null;

  constructor(
    private route: ActivatedRoute,
    private spaceXService: SpaceXService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.missionId = +id;
        this.fetchMissionDetails();
      }
    });
  }

  fetchMissionDetails(): void {
    this.spaceXService.getMissionDetails(this.missionId).subscribe((data) => {
      this.missionDetails = data;
    });
  }
}
