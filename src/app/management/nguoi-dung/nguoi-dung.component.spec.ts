import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NguoiDungComponent } from './nguoi-dung.component';

describe('NguoiDungComponent', () => {
  let component: NguoiDungComponent;
  let fixture: ComponentFixture<NguoiDungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NguoiDungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NguoiDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
