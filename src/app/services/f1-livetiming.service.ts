import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class F1LivetimingService {

  constructor(private http: HttpClient) { }

  // https://http://ergast.com/
  private urlErgast: string = "http://ergast.com/api/f1/drivers.json";

  // https://api.openf1.org/
  private urlOpenf1: string = "https://api.openf1.org/v1"
}
