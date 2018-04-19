import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastmessageComponent } from './broadcastmessage.component';

describe('BroadcastmessageComponent', () => {
  let component: BroadcastmessageComponent;
  let fixture: ComponentFixture<BroadcastmessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroadcastmessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadcastmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
