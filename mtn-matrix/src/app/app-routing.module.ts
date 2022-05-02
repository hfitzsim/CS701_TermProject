import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MountainsComponent } from './mountains/mountains.component'
import { MountainDetailComponent } from './mountain-detail/mountain-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: MountainDetailComponent },
  { path: 'mountains', component: MountainsComponent },
  { path: 'map', component: MapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }