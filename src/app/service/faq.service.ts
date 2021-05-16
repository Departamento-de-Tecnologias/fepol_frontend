import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Faq } from '../interfaces/faq';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  preguntas:Faq[] = [];

  constructor(private http: HttpClient) {
    this.cargarPreguntas();
   }

   cargarPreguntas(){
     return this.http.get("https://api.npoint.io/d909edbe1f5dc7db7b43").subscribe((res:any) => {
       this.preguntas = res
     })
   }
}
