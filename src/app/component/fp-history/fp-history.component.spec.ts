import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpHistoryComponent } from './fp-history.component';

describe('FpHistoryComponent', () => {
  let component: FpHistoryComponent;
  let fixture: ComponentFixture<FpHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FpHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FpHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
