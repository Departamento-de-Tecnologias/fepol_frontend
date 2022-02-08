import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClubesService {

  constructor(private http: HttpClient) {
   }

   cargarInfo(){
     return this.http.get<any>("https://api.npoint.io/2d8fecd7a69f7a5eceb3")
   }

}
