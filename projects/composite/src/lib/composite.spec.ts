import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Composite } from './composite';

describe('Composite', () => {
  let component: Composite;
  let fixture: ComponentFixture<Composite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Composite]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Composite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
