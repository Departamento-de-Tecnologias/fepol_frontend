import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingSidebarComponent } from './floating-sidebar.component';

describe('FloatingSidebarComponent', () => {
  let component: FloatingSidebarComponent;
  let fixture: ComponentFixture<FloatingSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
