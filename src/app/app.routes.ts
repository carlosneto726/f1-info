import { Routes } from '@angular/router';
import { DriversComponent } from './components/drivers/drivers.component';
import { RacesComponent } from './components/races/races.component';
import { RaceComponent } from './components/races/race/race.component';

export const routes: Routes = [
    {path: "drivers", component: DriversComponent},
    {path: "races", component: RacesComponent},
    {path: "race/:race_id", component: RaceComponent}
];
