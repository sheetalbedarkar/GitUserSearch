import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpHeaderComponent } from './fp-header.component';

describe('FpHeaderComponent', () => {
  let component: FpHeaderComponent;
  let fixture: ComponentFixture<FpHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FpHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FpHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
