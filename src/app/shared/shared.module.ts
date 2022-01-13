import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FloatingSidebarComponent } from './floating-sidebar/floating-sidebar.component';
import { ThemeService } from './theme/theme.service';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, FloatingSidebarComponent, LoaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, FloatingSidebarComponent,LoaderComponent],
  providers: [ThemeService],
})
export class SharedModule {}
