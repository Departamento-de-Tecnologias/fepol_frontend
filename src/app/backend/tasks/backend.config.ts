import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IbackendConfig } from '../models/backend.interface';

@Injectable()
export class ApiConfig {
  static settings: IbackendConfig;
  constructor(private http: HttpClient) {}
  load() {
    const json = 'assets/config.json';
    return new Promise<void>((resolve, reject) => {
      this.http
        .get(json)
        .toPromise()
        .then((response) => {
          ApiConfig.settings = <IbackendConfig> response;
          resolve();
        })
        .catch((response: any) => {
          reject(`Could not load file '${json}': ${JSON.stringify(response)}`);
        });
    });
  }
}
