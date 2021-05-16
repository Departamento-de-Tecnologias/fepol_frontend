import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FloatingSidebarComponent } from './floating-sidebar/floating-sidebar.component';
import { ThemeService } from './theme/theme.service';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, FloatingSidebarComponent, HomeComponent, FaqComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, FloatingSidebarComponent, HomeComponent, FaqComponent],
  providers: [ThemeService],
})
export class SharedModule {}
