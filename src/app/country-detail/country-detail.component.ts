import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Country } from '../common/interfaces/country.interface';
import { CountryService } from '../common/services/country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  loading: boolean = false;

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


    })
  }


  getPdf(id: string) {
    this.loading = true

    this.countryService.generateCountryPdf(id).toPromise().then((res) => {
      this.loading = false;
      window.open(res.filePath, 'NewWindow')
    }, (err: HttpErrorResponse) => {
      this.loading = false;
      console.log(err)
      if (err.status === 404) {
        alert('Error 404')
      } else if (err.status != 404) {
        alert(`You have error ${err.status} please contact us for more information`)
      }

    })
  }

}
