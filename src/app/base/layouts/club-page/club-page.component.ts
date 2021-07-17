import { Component, OnInit } from '@angular/core';
import { ClubesService } from 'src/app/backend/tasks/clubesAsos.service';

@Component({
  selector: 'app-club-page',
  templateUrl: './club-page.component.html',
  styleUrls: ['./club-page.component.css']
})
export class ClubPageComponent implements OnInit {

  constructor(public clubesAsos: ClubesService) { }

  ngOnInit(): void {
  }

}
