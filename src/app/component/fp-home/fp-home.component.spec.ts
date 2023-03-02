import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpHomeComponent } from './fp-home.component';

describe('FpHomeComponent', () => {
  let component: FpHomeComponent;
  let fixture: ComponentFixture<FpHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FpHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FpHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
