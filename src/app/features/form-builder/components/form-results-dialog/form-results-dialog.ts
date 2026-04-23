import { JsonPipe, KeyValuePipe, NgClass } from '@angular/common';
import { Component, computed, inject, input, viewChild } from '@angular/core';
import { FormData } from '@form-builder/types/form-data';
import { Dialog } from '@shared/components/dialog/dialog';
import { ArrowLeft } from '@icons/arrow-left/arrow-left';
import { FormBuilderService } from '@form-builder/services/form-builder-service';
import { TextField } from '@core/models/text-field';
import { ExternalLink } from '@icons/external-link/external-link';

@Component({
  selector: 'app-form-results-dialog',
  imports: [Dialog, KeyValuePipe, ArrowLeft, ArrowLeft, NgClass, ExternalLink],
  templateUrl: './form-results-dialog.html',
})
export class FormResultsDialog {
  dialog = viewChild<Dialog>(Dialog);
  formBuilderService = inject(FormBuilderService);

  formData = input.required<FormData>();

  fields = this.formBuilderService.fields;
  fieldsLabelMap = computed(
    () =>
      new Map(
        this.fields().map((field) => {
          const type =
            field.getType() === 'text' ? (field as TextField).inputType : field.getType();

          return [field.id, { label: field.label, type }];
        }),
      ),
  );

  open() {
    this.dialog()?.open();
  }

  close() {
    this.dialog()?.close();
  }
}
