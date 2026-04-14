import { FieldType } from '@core/types/field-type';
import { FormField } from '../models/form-field';
import { TextField } from '../models/text-field';
import { SelectField } from '@core/models/select-field';

export class FieldFactory {
  static text(label: string, placeholder: string) {
    return new TextField(label, placeholder, 'text');
  }

  static email(label: string, placeholder: string) {
    return new TextField(label, placeholder, 'email');
  }

  static number(label: string, placeholder: string) {
    return new TextField(label, placeholder, 'number');
  }

  static select(label: string, placeholder: string, options: string[]) {
    return new SelectField(label, placeholder, options);
  }
}
