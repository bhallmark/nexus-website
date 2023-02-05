import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { LandingComponent } from './landing/landing.component';

import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LandingContentComponent } from './landing-content/landing-content.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [AppComponent, TeamComponent, LandingComponent, FooterComponent, HeaderComponent, LandingContentComponent, BannerComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
