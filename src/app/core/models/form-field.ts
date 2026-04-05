import { FieldType } from '@core/types/field-type';

export abstract class FormField {
  public id: string = crypto.randomUUID();

  constructor(
    public label: string,
    public placeholder: string,
  ) {
    this.label = label;
    this.placeholder = placeholder;
  }

  abstract getType(): FieldType;
}
