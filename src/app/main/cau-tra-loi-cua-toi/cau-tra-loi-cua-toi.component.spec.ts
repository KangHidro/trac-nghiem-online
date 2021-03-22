import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CauTraLoiCuaToiComponent } from './cau-tra-loi-cua-toi.component';

describe('CauTraLoiCuaToiComponent', () => {
  let component: CauTraLoiCuaToiComponent;
  let fixture: ComponentFixture<CauTraLoiCuaToiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CauTraLoiCuaToiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CauTraLoiCuaToiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
