import { Routes } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissionDetailsComponent } from './mission-details/mission-details.component';

export const routes: Routes = [
  { path: '', component: MissionlistComponent },
  { path: 'mission-details/:id', component: MissionDetailsComponent },
];