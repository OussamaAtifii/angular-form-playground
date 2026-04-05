import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFieldDialog } from './add-field-dialog';

describe('AddFieldDialog', () => {
  let component: AddFieldDialog;
  let fixture: ComponentFixture<AddFieldDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFieldDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFieldDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
