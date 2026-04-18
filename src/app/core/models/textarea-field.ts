import { FieldType } from '@core/types/field-type';
import { FormField } from './form-field';
import { InputType } from '@core/types/input-type';

export class TextareaField extends FormField {
  constructor(label: string, placeholder: string) {
    super(label, placeholder);
  }

  getType(): FieldType {
    return 'textarea';
  }
}
