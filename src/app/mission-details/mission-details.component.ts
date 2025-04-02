import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SpaceXService } from '../services/space-x.service';
import { Mission } from '../mission';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-mission-details',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.css']
})

export class MissionDetailsComponent implements OnInit{
  missionId: number = 1;
  missionDetails: Mission | null = null;

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
