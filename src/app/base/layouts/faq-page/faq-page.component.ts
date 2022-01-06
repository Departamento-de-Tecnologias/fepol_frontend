import { Component, OnInit } from '@angular/core';
import { FaqService} from 'src/app/backend/tasks/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.css']
})
export class FaqPageComponent implements OnInit {

  constructor(public faq: FaqService) {}

  ngOnInit():void {

  }

}
