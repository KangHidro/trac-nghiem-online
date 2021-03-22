import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LamTracNghiemComponent } from './lam-trac-nghiem.component';

describe('LamTracNghiemComponent', () => {
  let component: LamTracNghiemComponent;
  let fixture: ComponentFixture<LamTracNghiemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LamTracNghiemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LamTracNghiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
