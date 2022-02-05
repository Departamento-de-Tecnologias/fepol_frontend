import { Component, OnInit } from '@angular/core';
import { FacultyService } from 'src/app/backend/tasks/faculty.service';
import { FaqService} from 'src/app/backend/tasks/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.css']
})
export class FaqPageComponent implements OnInit {
  respuesta = {};

  constructor(public faq: FaqService, public facultyS: FacultyService) {}

  ngOnInit():void {

    this.loadFaculties();

  }

  async loadFaculties(){
    /*this.facultyS.getAllFacultiesO().subscribe((resp) => {
      this.respuesta = resp;
      // console.log(this.respuesta);
    });*/

    this.respuesta = this.facultyS.getAllFaculties();
  }

}
