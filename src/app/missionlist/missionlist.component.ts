import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceXService } from '../services/space-x.service';
import { MissionFilterComponent } from '../missionfilter/missionfilter.component';
import { Router } from '@angular/router';
import { Mission } from '../mission';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [
    CommonModule,
    MissionFilterComponent,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})

export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];
  filteredMissions: any[] = [];

  constructor(
    private spaceXService: SpaceXService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

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

  viewDetails(missionId: number) {
    this.router.navigate(['/mission-details', missionId]).then(() => {
      this.cdr.detectChanges();
    });
  }
}
