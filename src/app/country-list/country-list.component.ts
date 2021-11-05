import { Component, OnInit } from '@angular/core';
import { CountryService } from '../common/services/country.service';
import { Country } from '../common/interfaces/country.interface';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.list().subscribe((res) => {
      //Get seggregations[id] === "flagList";
      //console.log(res.aggregations[1].datasets[0].data) //object

      const apiCountries: { icon: string; initiativeCount: number; label: string; uri: string; value: number; link: any; id: string }[] = res.aggregations[1].datasets[0].data

      return this.countries = apiCountries.map((apiCountry) => ({
        id: apiCountry.uri.split('#')[1],
        label: apiCountry.label,
        uri: apiCountry.uri,
        name: apiCountry.label
      }))
    });

  }
}
