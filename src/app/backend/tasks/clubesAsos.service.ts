import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { clubesAsos } from '../models/clubesAsos';

@Injectable({
  providedIn: 'root'
})
export class ClubesService {

  info:clubesAsos[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
   }

   cargarInfo(){
     return this.http.get("https://api.npoint.io/2d8fecd7a69f7a5eceb3").subscribe((res:any) => {
       this.info = res
     })
   }

  detalles() {
    return this.http.get("https://api.npoint.io/2d8fecd7a69f7a5eceb3");
  }

}