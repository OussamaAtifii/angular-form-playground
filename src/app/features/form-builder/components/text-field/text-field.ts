import { Component, computed, input } from '@angular/core';
import { TextField as TextFieldModel } from '@core/models/text-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FieldIcon } from '../field-icon/field-icon';

@Component({
  selector: 'app-text-field',
  imports: [ReactiveFormsModule, FieldIcon],
  templateUrl: './text-field.html',
})
export class TextField {
  field = input.required<TextFieldModel>();
  control = input.required<FormControl>();

  placeholder = computed(() => this.field().placeholder + '...');
}
