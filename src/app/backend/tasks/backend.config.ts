import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IbackendConfig } from '../models/backend.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiConfig {
  config!: IbackendConfig;

  constructor(private http: HttpClient) {}
  load() {
    const json = './assets/config.json';
    return new Promise<void>((resolve, reject) => {
      this.http
        .get(json)
        .toPromise()
        .then((response) => {
          this.config = <IbackendConfig> response;
          environment.serverurl = this.config.baseUrl;
          resolve();
        })
        .catch((response: any) => {
          reject(`Could not load file '${json}': ${JSON.stringify(response)}`);
        });
    });
  }
}
