import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-floating-sidebar',
  templateUrl: './floating-sidebar.component.html',
  styleUrls: ['./floating-sidebar.component.css'],
})
export class FloatingSidebarComponent implements OnInit {
  theme: Theme = 'light-theme';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.initializeTheme();
  }

  initializeTheme = (): void => {
    let local = localStorage.getItem('theme');
    if (local) {
      this.theme = (local as Theme)!;
    } else {
      localStorage.setItem('theme', this.theme);
    }
    this.renderer.addClass(this.document.body, this.theme);
  };

  switchTheme() {
    this.document.body.classList.replace(
      this.theme,
      this.theme === 'light-theme'
        ? (this.theme = 'dark-theme')
        : (this.theme = 'light-theme')
    );
    localStorage.setItem('theme', this.theme);
  }
}

export type Theme = 'light-theme' | 'dark-theme';
