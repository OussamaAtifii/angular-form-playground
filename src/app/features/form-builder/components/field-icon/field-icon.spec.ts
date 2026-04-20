import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldIcon } from './field-icon';

describe('FieldIcon', () => {
  let component: FieldIcon;
  let fixture: ComponentFixture<FieldIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
