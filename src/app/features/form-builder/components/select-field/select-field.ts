import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SelectField as SelectFieldModel } from '@core/models/select-field';
import { ListIcon } from '@icons/list-icon/list-icon';
import { ChevronDownIcon } from '@icons/chevron-down-icon/chevron-down-icon';

@Component({
  selector: 'app-select-field',
  imports: [ReactiveFormsModule, ListIcon, ChevronDownIcon],
  templateUrl: './select-field.html',
})
export class SelectField {
  field = input.required<SelectFieldModel>();
  control = input.required<FormControl>();
}
