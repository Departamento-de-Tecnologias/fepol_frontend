import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFaculty } from '../models/faculty.interface';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class FacultyService extends BaseService {
  httpOptions = {
    header: new HttpHeaders({
      'Content-Type':'application/json',
      Authorization: 'my-auth-token',
    })
  }

  constructor(private http:HttpClient) {
    super();
  }

  async getAllFaculties(): Promise<IFaculty[]> {
    console.log(this.buildurl('facultad/'));
    return this.http.get<IFaculty[]>(this.buildurl('facultad/')).toPromise();
  }

  getAllFacultiesO(): Observable<IFaculty[]> {
    console.log(this.buildurl('facultad/'));
    return this.http.get<IFaculty[]>(this.buildurl('facultad/'));
  }
}
