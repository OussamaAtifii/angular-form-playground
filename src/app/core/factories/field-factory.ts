import { FieldType } from '@core/types/field-type';
import { FormField } from '../models/form-field';
import { TextField } from '../models/text-field';
import { SelectField } from '@core/models/select-field';

export class FieldFactory {
  static create(type: FieldType, label: string, placeholder: string): FormField {
    switch (type) {
      case 'text':
        return new TextField(label, placeholder, 'text');

      case 'email':
        return new TextField(label, placeholder, 'email');

      case 'number':
        return new TextField(label, placeholder, 'number');

      case 'select':
        return new SelectField(label, placeholder, [
          { placeholder: 'Test', value: '2' },
          { placeholder: 'Test 2', value: '1' },
        ]);

      default:
        throw new Error(`Unsupported field type: ${type}`);
    }
  }
}
