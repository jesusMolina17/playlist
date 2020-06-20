import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  
  constructor(protected http: HttpClient) { }

  getTracks(){
    return this.http.get('/playlist/93489551/tracks');
  }
}
