import { Component } from '@angular/core';
import { RacesService } from '../../services/races.service';
import { CommonModule } from '@angular/common';
import { Race } from '../../interfaces/Race';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-races',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './races.component.html',
  styleUrl: './races.component.css'
})
export class RacesComponent {

  races: Race[] = [];

  constructor(private raceService: RacesService ){
    this.raceService.getAllRaces().subscribe(
      (races: any) => {
        races.map(
          (race: Race) => this.races.push(race)
        );
      }
    );
  }
}
