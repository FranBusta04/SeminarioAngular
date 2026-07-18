import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputInt } from './input-int';

describe('InputInt', () => {
  let component: InputInt;
  let fixture: ComponentFixture<InputInt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputInt],
    }).compileComponents();

    fixture = TestBed.createComponent(InputInt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
