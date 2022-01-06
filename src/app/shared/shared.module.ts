import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FloatingSidebarComponent } from './floating-sidebar/floating-sidebar.component';
import { ThemeService } from './theme/theme.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, FloatingSidebarComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, FloatingSidebarComponent],
  providers: [ThemeService],
})
export class SharedModule {}
