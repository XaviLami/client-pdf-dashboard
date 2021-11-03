import { Injectable, OnInit } from '@angular/core';
import { Country } from '../interfaces/country.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }


  url = "https://stip-pp.oecd.org/ws/STIP/API/dashboards/main.xqy?portal=primary";

  list(): Observable<any> {
    return this.http.get(this.url);

  }
  show(label: string): Observable<any> {
    return this.http.get(this.url)
  }
}
