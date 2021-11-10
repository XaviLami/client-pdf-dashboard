import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor(private http: HttpClient) {}

  list(): Observable<any> {
    return this.http.get(
      environment.countryApiBaseUrl + '/main.xqy?portal=primary'
    )
  }
  show(id: string): Observable<any> {
    return this.http.get(
      environment.countryApiBaseUrl +
        `/country.xqy?portal=primary&uri=http://kim.oecd.org/Taxonomy/GeographicalAreas%23${id}`
    )
  }

  generateCountryPdf(id: string): Observable<{ filePath: string }> {
    return this.http.get(
      `http://localhost:3000/countries/${id}`
    ) as Observable<{ filePath: string }>
  }
}
