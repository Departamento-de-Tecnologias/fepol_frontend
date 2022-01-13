import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrganizacion } from '../models/iorganizacion';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizacionService extends BaseService{
  httpOptions = {
    header: new HttpHeaders({
      'Content-Type':'application/json',
      Authorization: 'my-auth-token',
    })
  }

  constructor(private http:HttpClient) {
    super();
   }


   async getAllOrganizations():Promise<IOrganizacion[]>{
        return await this.http
                     .get<IOrganizacion[]>(this.buildurl('api/organization'))
                     .toPromise();
   }

   async getOrganization(organizationID:string):Promise<IOrganizacion>{
     return await this.http
            .get<IOrganizacion>(this.buildurl('URL A ID'+organizationID+'/'))
            .toPromise();
   }
}
