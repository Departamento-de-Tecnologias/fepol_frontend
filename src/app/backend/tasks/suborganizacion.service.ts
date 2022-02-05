import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from '../models/iresponse';
import { ISuborganizacion } from '../models/isuborganizacion';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class SuborganizacionService extends BaseService {
  httpOptions = {
    header: new HttpHeaders({
      'Content-Type':'application/json',
      Authorization: 'my-auth-token',
    })
  }

  constructor(private http:HttpClient) {
    super();
  }

  async getAllSubOrganizations(): Promise<ISuborganizacion[]> {
    return this.http.get<ISuborganizacion[]>(this.buildurl('suborganizacion/')).toPromise();
  }

  getAllSubOrganizationsO(): Observable<IResponse> {
    return this.http.get<IResponse>(this.buildurl('suborganizacion/'));
  }
}
