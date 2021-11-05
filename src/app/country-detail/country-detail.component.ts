import { Component, OnInit } from '@angular/core';
import { CountryService } from '../common/services/country.service';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../common/interfaces/country.interface';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  country: Country = {
    label: '',
    id: '',
    uri: '',
    name: ''
  };


  constructor(private countryService: CountryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.countryService.show(id).subscribe((res) => {
      this.country = res;
      console.log(this.country)
    })
  }

  getPdf(id: string) {
    console.log(this.countryService.getCountryPdf(id))
    this.countryService.getCountryPdf(id)
  }

}
