import { Component, inject, signal, viewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilderService } from '@form-builder/services/form-builder-service';
import { FieldType } from '@core/types/field-type';
import { Dialog } from '@shared/components/dialog/dialog';
import { TrashIcon } from '@icons/trash-icon/trash-icon';
import { ToastService } from '@shared/services/toast-service';
import { FieldConfig } from '@core/types/field-config';
import { FieldIcon } from '../field-icon/field-icon';

@Component({
  selector: 'app-add-field-dialog',
  imports: [ReactiveFormsModule, Dialog, TrashIcon, FieldIcon],
  templateUrl: './add-field-dialog.html',
})
export class AddFieldDialog {
  private formBuilder = inject(FormBuilder);
  private formBuilderService = inject(FormBuilderService);
  private toast = inject(ToastService);

  dialog = viewChild<Dialog>(Dialog);

  form = this.formBuilder.group({
    type: ['text', { nonNullable: true }],
    label: ['', [Validators.required]],
    placeholder: ['', Validators.required],
    selectOption: [''],
  });

  options = signal<{ label: string; value: FieldType }[]>([
    { label: 'Text', value: 'text' },
    { label: 'Email', value: 'email' },
    { label: 'Number', value: 'number' },
    { label: 'Password', value: 'password' },
    { label: 'Textarea', value: 'textarea' },
    { label: 'Select', value: 'select' },
  ]);

  selectOptions = signal<string[]>([]);

  open() {
    this.dialog()?.open();
  }

  close() {
    this.selectOptions.set([]);
    this.resetForm();
    this.dialog()?.close();
  }

  createField() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { type, label, placeholder } = this.form.value;

    if (!type || !label || !placeholder) return;

    const config: FieldConfig = {
      type: type as FieldType,
      label,
      placeholder,
      options: this.selectOptions(),
    };

    this.formBuilderService.addField(config);
    this.close();
  }

  addSelectOption() {
    const control = this.form.get('selectOption');
    const option = control?.value;

    if (!option) return;

    if (this.selectOptions().find((value) => value.toLowerCase() === option.toLowerCase())) {
      this.toast.info('This option already exists');
      return;
    }

    this.selectOptions.update((prev) => [option, ...prev]);
    control?.setValue('');
    console.log(this.selectOptions());
  }

  removeSelectOption(option: string) {
    if (!option || option.trim() === '') return;

    this.selectOptions.update((prev) => prev.filter((opt) => opt !== option));
  }

  private resetForm() {
    this.form.reset({ type: 'text' });
  }
}
