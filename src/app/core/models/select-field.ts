import { FieldType } from '@core/types/field-type';
import { FormField } from './form-field';

export class SelectField extends FormField {
  options: string[];

  constructor(label: string, placeholder: string, options: string[]) {
    super(label, placeholder);
    this.options = options;
  }

  getType(): FieldType {
    return 'select';
  }
}
