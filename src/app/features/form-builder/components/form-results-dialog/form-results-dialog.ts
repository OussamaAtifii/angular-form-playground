import { JsonPipe, KeyValuePipe } from '@angular/common';
import { Component, input, viewChild } from '@angular/core';
import { FormData } from '@form-builder/types/form-data';
import { Dialog } from '@shared/components/dialog/dialog';

@Component({
  selector: 'app-form-results-dialog',
  imports: [Dialog, KeyValuePipe],
  templateUrl: './form-results-dialog.html',
})
export class FormResultsDialog {
  dialog = viewChild<Dialog>(Dialog);
  formData = input.required<FormData>();

  open() {
    this.dialog()?.open();
  }

  close() {
    this.dialog()?.close();
  }
}
