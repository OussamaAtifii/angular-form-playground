import { Component, computed, input } from '@angular/core';
import { FormField } from '@core/models/form-field';
import { TextField } from '../text-field/text-field';
import { TextField as TextFieldModel } from '@core/models/text-field';

@Component({
  selector: 'app-field-renderer',
  imports: [TextField],
  templateUrl: './field-renderer.html',
})
export class FieldRenderer {
  field = input.required<FormField>();

  fieldType = computed(() => {
    const field = this.field();
    const textField = this.textField();

    return textField ? textField.inputType : field.getType();
  });

  textField = computed(() => {
    const field = this.field();
    return field.getType() === 'text' ? (field as TextFieldModel) : null;
  });
}
