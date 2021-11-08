import { Injectable, OnInit } from '@angular/core';
import { Country } from '../interfaces/country.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }




  list(): Observable<any> {
    return this.http.get("https://stip-pp.oecd.org/ws/STIP/API/dashboards/main.xqy?portal=primary");

  }
  show(id: string): Observable<any> {
    //console.log(`https://stip-pp.oecd.org/ws/STIP/API/dashboards/country.xqy?portal=primary&uri=http://kim.oecd.org/Taxonomy/GeographicalAreas%23${id}`)
    return this.http.get(`https://stip-pp.oecd.org/ws/STIP/API/dashboards/country.xqy?portal=primary&uri=http://kim.oecd.org/Taxonomy/GeographicalAreas%23${id}`);
  }

  generateCountryPdf(id: string): Observable<{ filePath: string }> {
    return this.http.get(`http://localhost:3000/countries/${id}`) as Observable<{ filePath: string }>
  }
}
