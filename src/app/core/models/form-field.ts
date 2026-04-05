import { FieldType } from '@core/types/field-type';

export abstract class FormField {
  id: string;
  label: string;
  placeholder: string;
  required: boolean;

  constructor(label: string, placeholder: string) {
    this.id = crypto.randomUUID();
    this.label = label;
    this.placeholder = placeholder;
    this.required = false;
  }

  abstract getType(): FieldType;
}
