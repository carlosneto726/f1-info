import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class F1LivetimingService {

  constructor(private http: HttpClient) { }

  private: string = "https://livetiming.formula1.com/static/2024/Index.json";

  getIndex2024(){
    return this.http.get(this.private);
  }
}
