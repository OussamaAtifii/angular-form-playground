import { Component, computed, input } from '@angular/core';
import { FormField } from '@core/models/form-field';
import { TextField } from '../text-field/text-field';
import { TextField as TextFieldModel } from '@core/models/text-field';
import { SelectField as SelectFieldModel } from '@core/models/select-field';
import { TextareaField as TextareaFieldModel } from '@core/models/textarea-field';
import { FormControl } from '@angular/forms';
import { SelectField } from '../select-field/select-field';
import { TextareaField } from '../textarea-field/textarea-field';

@Component({
  selector: 'app-field-renderer',
  imports: [TextField, SelectField, TextareaField],
  templateUrl: './field-renderer.html',
})
export class FieldRenderer {
  field = input.required<FormField>();
  control = input.required<FormControl<any>>();

  fieldType = computed(() => {
    const field = this.field();
    const textField = this.textField();

    return textField ? textField.inputType : field.getType();
  });

  textField = computed(() => {
    const field = this.field();
    return field.getType() === 'text' ? (field as TextFieldModel) : null;
  });

  selectField = computed(() => {
    const field = this.field();
    return field.getType() === 'select' ? (field as SelectFieldModel) : null;
  });

  textareaField = computed(() => {
    const field = this.field();
    return field.getType() === 'textarea' ? (field as TextareaFieldModel) : null;
  });
}
