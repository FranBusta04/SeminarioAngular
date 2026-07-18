import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellStoreAbout } from './cell-store-about';

describe('CellStoreAbout', () => {
  let component: CellStoreAbout;
  let fixture: ComponentFixture<CellStoreAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CellStoreAbout],
    }).compileComponents();

    fixture = TestBed.createComponent(CellStoreAbout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
