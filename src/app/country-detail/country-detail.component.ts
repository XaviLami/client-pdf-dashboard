import { Component, OnInit } from '@angular/core';
import { CountryService } from '../common/services/country.service';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../common/interfaces/country.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

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


  constructor(private countryService: CountryService, private route: ActivatedRoute, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.countryService.show(id).subscribe((res) => {
      this.country = res;
      console.log(this.country)
    })
  }

  getPdf(id: string) {
    this.countryService.generateCountryPdf(id).toPromise().then((res) => {
      console.log(res)
      const windowOpen = window.open(res.filePath, 'New')
    }, (err: HttpErrorResponse) => {
      console.log(err)
      if (err.status === 404) {
        alert('Error 404')
      } else if (err.status != 404) {
        alert(`You have error ${err.status} please contact us for more information`)
      }

    })
  }

}
