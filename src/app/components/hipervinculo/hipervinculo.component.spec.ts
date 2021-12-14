import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipervinculoComponent } from './hipervinculo.component';

describe('HipervinculoComponent', () => {
  let component: HipervinculoComponent;
  let fixture: ComponentFixture<HipervinculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HipervinculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HipervinculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
