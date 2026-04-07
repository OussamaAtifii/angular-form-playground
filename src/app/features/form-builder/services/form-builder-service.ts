import { Injectable, signal } from '@angular/core';
import { FieldFactory } from '@core/factories/field-factory';
import { FormField } from '@core/models/form-field';
import { FieldType } from '@core/types/field-type';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  private _fields = signal<FormField[]>([]);
  fields = this._fields.asReadonly();

  constructor() {
    this._fields.set([
      FieldFactory.create('text', 'Username', 'Add your username'),
      FieldFactory.create('email', 'Email', 'Add your email'),
      FieldFactory.create('number', 'Age', 'Add your age'),
    ]);
  }

  addField(type: FieldType, label: string, placeholder: string) {
    const field = FieldFactory.create(type, label, placeholder);

    this._fields.update((fields) => [...fields, field]);
  }
}
