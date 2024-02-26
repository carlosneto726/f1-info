import { Routes } from '@angular/router';
import { DriversComponent } from './components/drivers/drivers.component';
import { RacesComponent } from './components/races/races.component';

export const routes: Routes = [
    {path: "drivers", component: DriversComponent},
    {path: "races", component: RacesComponent}
];
