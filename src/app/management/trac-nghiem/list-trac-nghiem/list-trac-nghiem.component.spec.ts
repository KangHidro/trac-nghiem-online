import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTracNghiemComponent } from './list-trac-nghiem.component';

describe('ListTracNghiemComponent', () => {
  let component: ListTracNghiemComponent;
  let fixture: ComponentFixture<ListTracNghiemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTracNghiemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTracNghiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
