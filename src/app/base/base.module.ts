import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { AboutFepolComponent } from './components/about-fepol/about-fepol.component';
import { AboutTeamComponent } from './components/about-team/about-team.component';
import { HomePageComponent } from './layouts/home-page/home-page.component';
import { ManualPageComponent } from './layouts/manual-page/manual-page.component';
import { TimelinePageComponent } from './layouts/timeline-page/timeline-page.component';



@NgModule({
  declarations: [BannerComponent, AboutFepolComponent, AboutTeamComponent, HomePageComponent, ManualPageComponent, TimelinePageComponent],
  imports: [
    CommonModule
  ]
})
export class BaseModule { }
