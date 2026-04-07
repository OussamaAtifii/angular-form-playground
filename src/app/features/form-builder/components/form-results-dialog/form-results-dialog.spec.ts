import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormResultsDialog } from './form-results-dialog';

describe('FormResultsDialog', () => {
  let component: FormResultsDialog;
  let fixture: ComponentFixture<FormResultsDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormResultsDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormResultsDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
