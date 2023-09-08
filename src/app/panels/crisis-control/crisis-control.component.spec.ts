import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisControlComponent } from './crisis-control.component';

describe('CrisisControlComponent', () => {
  let component: CrisisControlComponent;
  let fixture: ComponentFixture<CrisisControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrisisControlComponent]
    });
    fixture = TestBed.createComponent(CrisisControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
