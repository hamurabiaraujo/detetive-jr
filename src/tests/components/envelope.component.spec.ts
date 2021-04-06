import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeComponent } from '../../app/componentes/envelope/envelope.component';

describe('EnvelopeComponent', () => {
  let component: EnvelopeComponent;
  let fixture: ComponentFixture<EnvelopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvelopeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvelopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create an array of Vilões', () => {
    expect(component.viloes).toBeDefined();
    // expect(component.viloes.length).toBeGreaterThan(0);
  });
});
