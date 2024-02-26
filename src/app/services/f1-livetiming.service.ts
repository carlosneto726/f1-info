import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class F1LivetimingService {

  constructor(private http: HttpClient) { }

  // https://openf1.org/
  private: string = "https://api.openf1.org/v1";

  getAllDrivers(){
    return this.http.get(`${this.private}/drivers`);
  }
}
