import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CountryDetailComponent } from './country-detail/country-detail.component'
import { CountryListComponent } from './country-list/country-list.component'

@NgModule({
  declarations: [AppComponent, CountryListComponent, CountryDetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
