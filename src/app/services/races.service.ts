import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RacesService {

  private url: string = "https://api.openf1.org/v1/meetings";

  constructor(private http: HttpClient) { }

  getAllRaces(){
    return this.http.get(this.url);
  }

  getRaceById(meeting_key: string){
    return this.http.get(`${this.url}?meeting_key=${meeting_key}`);
  }

}
