import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { clubesAsos } from 'src/app/backend/models/clubesAsos';
import { ClubesService } from 'src/app/backend/tasks/clubesAsos.service';

@Component({
  selector: 'app-detalles-page',
  templateUrl: './detalles-page.component.html',
  styleUrls: ['./detalles-page.component.css']
})
export class DetallesPageComponent implements OnInit {

  detalles:any;
  clubes:any;
  id = 0;
  constructor(private route:ActivatedRoute,public clubesAsos:ClubesService) {
    route.params.subscribe (data =>{
        this.id = parseInt(data['id']);
        clubesAsos.cargarInfo().subscribe(res => {
          this.clubes = res;
          this.detalles = this.clubes[this.id - 1];
        })
      })
    };

  ngOnInit(): void {
  }

}
