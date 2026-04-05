import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilderService } from '@features/form-builder/services/form-builder-service';
import { TextSizeIcon } from 'app/shared/icons/text-size-icon/text-size-icon';
import { ListIcon } from 'app/shared/icons/list-icon/list-icon';
import { FieldType } from '@core/types/field-type';
import { MailIcon } from 'app/shared/icons/mail-icon/mail-icon';
import { NumberIcon } from 'app/shared/icons/number-icon/number-icon';
import { XIcon } from 'app/shared/icons/x-icon/x-icon';

@Component({
  selector: 'app-add-field-dialog',
  imports: [ReactiveFormsModule, TextSizeIcon, ListIcon, MailIcon, NumberIcon, XIcon],
  templateUrl: './add-field-dialog.html',
})
export class AddFieldDialog {
  private formBuilder = inject(FormBuilder);
  private formBuilderService = inject(FormBuilderService);

  dialog = viewChild<ElementRef<HTMLDialogElement>>('dialog');

  form = this.formBuilder.group({
    type: ['text'],
    label: ['', [Validators.required]],
    placeholder: [''],
  });

  options = signal<{ label: string; value: FieldType }[]>([
    { label: 'Text', value: 'text' },
    { label: 'Email', value: 'email' },
    { label: 'Number', value: 'number' },
  ]);

  open() {
    this.dialog()?.nativeElement.showModal();
    this.dialog()?.nativeElement.focus();
  }

  close() {
    this.resetForm();
    this.dialog()?.nativeElement.close();
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

  private resetForm() {
    this.form.reset({ type: 'text' });
  }
}
