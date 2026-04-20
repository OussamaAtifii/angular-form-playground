import { Injectable, signal } from '@angular/core';
import { FieldFactory } from '@core/factories/field-factory';
import { FormField } from '@core/models/form-field';
import { FieldConfig } from '@core/types/field-config';
import { FieldType } from '@core/types/field-type';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  private _fields = signal<FormField[]>([]);
  fields = this._fields.asReadonly();

  constructor() {
    this._fields.set([
      FieldFactory.text('Username', 'Add your username'),
      FieldFactory.email('Email', 'Add your email'),
      FieldFactory.number('Age', 'Add your age'),
    ]);
  }

  addField(config: FieldConfig) {
    let field: FormField;

    switch (config.type) {
      case 'text':
      case 'email':
      case 'number':
      case 'password':
        field = FieldFactory[config.type](config.label, config.placeholder);
        break;

      case 'select':
        field = FieldFactory.select(config.label, config.placeholder, config.options);
        break;

      case 'textarea':
        field = FieldFactory.textarea(config.label, config.placeholder);
        break;

      default:
        break;
    }

    this._fields.update((fields) => [...fields, field]);
  }
}
