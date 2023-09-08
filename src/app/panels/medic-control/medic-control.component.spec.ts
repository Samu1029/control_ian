import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicControlComponent } from './medic-control.component';

describe('MedicControlComponent', () => {
  let component: MedicControlComponent;
  let fixture: ComponentFixture<MedicControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicControlComponent]
    });
    fixture = TestBed.createComponent(MedicControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
