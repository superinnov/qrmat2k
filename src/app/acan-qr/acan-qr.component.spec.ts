import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcanQrComponent } from './acan-qr.component';

describe('AcanQrComponent', () => {
  let component: AcanQrComponent;
  let fixture: ComponentFixture<AcanQrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcanQrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcanQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
