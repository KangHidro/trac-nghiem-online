import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNguoiDungComponent } from './list-nguoi-dung.component';

describe('ListNguoiDungComponent', () => {
  let component: ListNguoiDungComponent;
  let fixture: ComponentFixture<ListNguoiDungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNguoiDungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNguoiDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
