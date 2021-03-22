import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNguoiDungComponent } from './form-nguoi-dung.component';

describe('FormNguoiDungComponent', () => {
  let component: FormNguoiDungComponent;
  let fixture: ComponentFixture<FormNguoiDungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNguoiDungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNguoiDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
