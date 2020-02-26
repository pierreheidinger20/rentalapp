import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyRentalComponent } from './monthly-rental.component';

describe('MonthlyRentalComponent', () => {
  let component: MonthlyRentalComponent;
  let fixture: ComponentFixture<MonthlyRentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyRentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
