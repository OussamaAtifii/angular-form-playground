import { Component, effect, inject, viewChild } from '@angular/core';
import { FormBuilderService } from './services/form-builder-service';
import { FieldRenderer } from './components/field-renderer/field-renderer';
import { AddFieldDialog } from './components/add-field-dialog/add-field-dialog';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PlusIcon } from '@icons/plus-icon/plus-icon';
import { PlayerPlayIcon } from '@icons/player-play-icon/player-play-icon';
import { FormResultsDialog } from './components/form-results-dialog/form-results-dialog';
import { FormData } from './types/form-data';

@Component({
  selector: 'app-form-builder',
  imports: [
    FieldRenderer,
    PlusIcon,
    AddFieldDialog,
    ReactiveFormsModule,
    PlayerPlayIcon,
    FormResultsDialog,
  ],
  templateUrl: './form-builder.html',
})
export class FormBuilder {
  private formBuilderService = inject(FormBuilderService);

  addFieldDialog = viewChild<AddFieldDialog>(AddFieldDialog);
  formResultsDialog = viewChild<FormResultsDialog>(FormResultsDialog);

  fields = this.formBuilderService.fields;

  form = new FormGroup({
    fields: new FormGroup({}),
  });

  constructor() {
    effect(() => {
      const fields = this.fields();
      const group = this.fieldsGroup;

      fields.forEach((field) => {
        const fieldId = field.id;

        if (!group.contains(fieldId)) {
          group.addControl(fieldId, new FormControl(''));
        }
      });
    });
  }

  showFormValues() {
    this.formResultsDialog()?.open();
  }

  get fieldsGroup() {
    return this.form.get('fields') as FormGroup;
  }

  get fieldsGroupValue(): FormData {
    return this.fieldsGroup.value as FormData;
  }

  getControl(id: string): FormControl {
    return this.fieldsGroup.get(id) as FormControl;
  }

  openDialog() {
    this.addFieldDialog()?.open();
  }
}
