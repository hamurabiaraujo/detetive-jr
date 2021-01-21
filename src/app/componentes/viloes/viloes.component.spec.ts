import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViloesComponent } from './viloes.component';

describe('ViloesComponent', () => {
  let component: ViloesComponent;
  let fixture: ComponentFixture<ViloesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViloesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViloesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
