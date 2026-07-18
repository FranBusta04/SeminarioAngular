import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellStoreHome } from './cell-store-home';

describe('CellStoreHome', () => {
  let component: CellStoreHome;
  let fixture: ComponentFixture<CellStoreHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CellStoreHome],
    }).compileComponents();

    fixture = TestBed.createComponent(CellStoreHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
