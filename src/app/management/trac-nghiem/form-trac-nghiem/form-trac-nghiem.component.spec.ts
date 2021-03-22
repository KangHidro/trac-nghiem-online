import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTracNghiemComponent } from './form-trac-nghiem.component';

describe('FormTracNghiemComponent', () => {
  let component: FormTracNghiemComponent;
  let fixture: ComponentFixture<FormTracNghiemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTracNghiemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTracNghiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
