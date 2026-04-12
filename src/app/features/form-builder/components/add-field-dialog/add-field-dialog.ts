import { Component, inject, signal, viewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilderService } from '@form-builder/services/form-builder-service';
import { TextSizeIcon } from '@icons/text-size-icon/text-size-icon';
import { ListIcon } from '@icons/list-icon/list-icon';
import { FieldType } from '@core/types/field-type';
import { MailIcon } from '@icons/mail-icon/mail-icon';
import { NumberIcon } from '@icons/number-icon/number-icon';
import { Dialog } from '@shared/components/dialog/dialog';
import { TrashIcon } from '@icons/trash-icon/trash-icon';

@Component({
  selector: 'app-add-field-dialog',
  imports: [ReactiveFormsModule, TextSizeIcon, ListIcon, MailIcon, NumberIcon, Dialog, TrashIcon],
  templateUrl: './add-field-dialog.html',
})
export class AddFieldDialog {
  private formBuilder = inject(FormBuilder);
  private formBuilderService = inject(FormBuilderService);

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
    { label: 'Select', value: 'select' },
  ]);

  selectOptions = signal<string[]>([]);

  open() {
    this.dialog()?.open();
  }

  close() {
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

    this.formBuilderService.addField(type as FieldType, label, placeholder);

    this.resetForm();
    this.close();
  }

  addSelectOption() {
    const control = this.form.get('selectOption');
    const option = control?.value;

    if (!option) return;

    this.selectOptions.update((prev) => [option, ...prev]);
    console.log(this.selectOptions());
    control?.setValue('');
  }

  private resetForm() {
    this.form.reset({ type: 'text' });
  }
}
