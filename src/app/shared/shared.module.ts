import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FloatingSidebarComponent } from './floating-sidebar/floating-sidebar.component';
import { ThemeService } from './theme/theme.service';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, FloatingSidebarComponent, LoaderComponent, MailboxComponent],
  imports: [CommonModule, RouterModule,FormsModule],
  exports: [HeaderComponent, FooterComponent, FloatingSidebarComponent,LoaderComponent,MailboxComponent,FormsModule],
  providers: [ThemeService],
})
export class SharedModule {}
