import { Component, OnInit } from '@angular/core'
import { ApiCountry } from '../common/interfaces/api-country.interface'

import { Country } from '../common/interfaces/country.interface'
import { CountryService } from '../common/services/country.service'

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  countries: Country[] = []

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.list().subscribe((res) => {
      const apiCountries: ApiCountry[] = res.aggregations[1].datasets[0].data

      this.countries = apiCountries.map((apiCountry: ApiCountry) => ({
        id: apiCountry.uri.split('#')[1],
        label: apiCountry.label,
        uri: apiCountry.uri
      }))
    })
  }
}
