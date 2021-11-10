import { HttpErrorResponse } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'

import { Country } from '../common/interfaces/country.interface'
import { CountryService } from '../common/services/country.service'

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  loading: boolean = false

  country: Country
  countryId: string

  constructor(
    private countryService: CountryService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.countryService.show(params.id).subscribe((res) => {
        this.country = res
        this.countryId = params.id
      })
    })
  }

  getPdf(id: string) {
    this.loading = true

    this.countryService
      .generateCountryPdf(id)
      .toPromise()
      .then(
        (res: { filePath: string }) => {
          this.loading = false
          window.open(res.filePath)
        },
        (err: HttpErrorResponse) => {
          this.loading = false
          if (err.status === 404) {
            alert('Error 404')
          } else {
            alert(
              `You have error ${err.status} please contact us for more information`
            )
          }
        }
      )
  }
}
