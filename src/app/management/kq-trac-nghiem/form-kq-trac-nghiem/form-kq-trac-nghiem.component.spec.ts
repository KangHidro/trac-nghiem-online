import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormKqTracNghiemComponent } from './form-kq-trac-nghiem.component';

describe('FormKqTracNghiemComponent', () => {
  let component: FormKqTracNghiemComponent;
  let fixture: ComponentFixture<FormKqTracNghiemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormKqTracNghiemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormKqTracNghiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
