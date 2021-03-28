import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKqTracNghiemComponent } from './list-kq-trac-nghiem.component';

describe('ListKqTracNghiemComponent', () => {
  let component: ListKqTracNghiemComponent;
  let fixture: ComponentFixture<ListKqTracNghiemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListKqTracNghiemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKqTracNghiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
