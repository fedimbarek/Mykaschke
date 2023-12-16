import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccuilComponent } from './accuil.component';

describe('AccuilComponent', () => {
  let component: AccuilComponent;
  let fixture: ComponentFixture<AccuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccuilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
