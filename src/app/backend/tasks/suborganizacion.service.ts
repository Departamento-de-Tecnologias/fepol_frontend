import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  async getAllOrganizations():Promise<ISuborganizacion[]>{
    return await this.http
                 .get<ISuborganizacion[]>(this.buildurl('api/organization'))
                 .toPromise();
}

async getOrganization(organizationID:string):Promise<ISuborganizacion>{
 return await this.http
        .get<ISuborganizacion>(this.buildurl('URL A ID'+organizationID+'/'))
        .toPromise();
}
}
