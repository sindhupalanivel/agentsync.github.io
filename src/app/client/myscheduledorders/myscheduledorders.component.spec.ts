import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyscheduledordersComponent } from './myscheduledorders.component';

describe('MyscheduledordersComponent', () => {
  let component: MyscheduledordersComponent;
  let fixture: ComponentFixture<MyscheduledordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyscheduledordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyscheduledordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
