import { FieldType } from '@core/types/field-type';
import { FormField } from './form-field';
import { SelectOption } from '@core/types/select-option';

export class SelectField extends FormField {
  options: SelectOption[];

  constructor(label: string, placeholder: string, options: SelectOption[]) {
    super(label, placeholder);
    this.options = options;
  }

  getType(): FieldType {
    return 'select';
  }
}
