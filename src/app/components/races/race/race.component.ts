import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RacesService } from '../../../services/races.service';
import { Race } from '../../../interfaces/Race';

@Component({
  selector: 'app-race',
  standalone: true,
  imports: [],
  templateUrl: './race.component.html',
  styleUrl: './race.component.css'
})
export class RaceComponent {

  race?: Race;

  constructor(private route: ActivatedRoute, private raceService: RacesService){ 
    const code: any = this.route.snapshot.paramMap.get("race_id");

    this.raceService.getRaceById(code).subscribe(
      (race: any) => this.race = race[0]
    );
  }

}
