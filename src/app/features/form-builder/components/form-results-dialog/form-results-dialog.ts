import { JsonPipe, KeyValuePipe } from '@angular/common';
import { Component, inject, input, viewChild } from '@angular/core';
import { FormData } from '@form-builder/types/form-data';
import { Dialog } from '@shared/components/dialog/dialog';
import { ArrowLeft } from '@icons/arrow-left/arrow-left';
import { FormBuilderService } from '@form-builder/services/form-builder-service';

@Component({
  selector: 'app-form-results-dialog',
  imports: [Dialog, KeyValuePipe, ArrowLeft, ArrowLeft],
  templateUrl: './form-results-dialog.html',
})
export class FormResultsDialog {
  dialog = viewChild<Dialog>(Dialog);

  formBuilderService = inject(FormBuilderService);

  fields = this.formBuilderService.fields;

  formData = input.required<FormData>();

  getFieldLabel(fieldId: string) {
    return this.fields().find((field) => field.id === fieldId)?.label;
  }

  open() {
    this.dialog()?.open();
  }

  close() {
    this.dialog()?.close();
  }
}
