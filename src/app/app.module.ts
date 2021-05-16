import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BaseModule } from './base/base.module';
import { SharedModule } from './shared/shared.module';
import { ApiConfig } from './backend/tasks/backend.config';

export function initializeApp(apiConfig: ApiConfig) {
  return () => apiConfig.load();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BaseModule,
    SharedModule,
  ],
  providers: [
    ApiConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ApiConfig],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}