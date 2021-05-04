import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFepolComponent } from './about-fepol.component';

describe('AboutFepolComponent', () => {
  let component: AboutFepolComponent;
  let fixture: ComponentFixture<AboutFepolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutFepolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutFepolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
