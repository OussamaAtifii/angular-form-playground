import { FieldType } from '@core/types/field-type';
import { FormField } from './form-field';
import { InputType } from '@core/types/input-type';

export class TextField extends FormField {
  inputType: InputType;

  constructor(label: string, placeholder: string, inputType: InputType) {
    super(label, placeholder);
    this.inputType = inputType;
  }

  getType(): FieldType {
    return 'text';
  }
}
