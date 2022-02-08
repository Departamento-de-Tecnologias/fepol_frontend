import { Component, OnInit } from '@angular/core';
import { clubesAsos } from 'src/app/backend/models/clubesAsos';
import { ClubesService } from 'src/app/backend/tasks/clubesAsos.service';

@Component({
  selector: 'app-club-page',
  templateUrl: './club-page.component.html',
  styleUrls: ['./club-page.component.css']
})
export class ClubPageComponent implements OnInit {
  cargando:boolean[] = [];
  clubesAsos:clubesAsos[]=[];
  constructor(public clubes: ClubesService) {

  }

  ngOnInit(): void {
    this.clubes.cargarInfo().subscribe(data =>{
      for(let info of data){
        this.clubesAsos.push(info);
        this.cargando.push(true);
      }
    });
  }

  hola(index:number){
    this.cargando[index]=false;
  }



}
