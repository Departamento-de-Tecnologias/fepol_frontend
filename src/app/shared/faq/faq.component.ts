import { Component, OnInit } from '@angular/core';
import { FaqService} from 'src/app/service/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(public faq: FaqService) {}

  ngOnInit():void {

  }

}
