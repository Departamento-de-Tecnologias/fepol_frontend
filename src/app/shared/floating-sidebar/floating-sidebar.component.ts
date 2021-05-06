import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-sidebar',
  templateUrl: './floating-sidebar.component.html',
  styleUrls: ['./floating-sidebar.component.css'],
})
export class FloatingSidebarComponent implements OnInit {
  private currentTheme = 'light';

  constructor() {}

  ngOnInit(): void {}

  changeTheme() {
    let switchToTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.currentTheme = switchToTheme;
  }
}
