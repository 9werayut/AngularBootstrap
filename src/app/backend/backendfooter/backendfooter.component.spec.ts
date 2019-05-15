import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendfooterComponent } from './backendfooter.component';

describe('BackendfooterComponent', () => {
  let component: BackendfooterComponent;
  let fixture: ComponentFixture<BackendfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
