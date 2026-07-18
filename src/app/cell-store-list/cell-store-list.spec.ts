import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellStoreList } from './cell-store-list';

describe('CellStoreList', () => {
  let component: CellStoreList;
  let fixture: ComponentFixture<CellStoreList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CellStoreList],
    }).compileComponents();

    fixture = TestBed.createComponent(CellStoreList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
