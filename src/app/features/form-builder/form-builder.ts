import { Component, inject, viewChild } from '@angular/core';
import { FormBuilderService } from './services/form-builder-service';
import { FieldRenderer } from './components/field-renderer/field-renderer';
import { PlusIcon } from 'app/shared/icons/plus-icon/plus-icon';
import { AddFieldDialog } from './components/add-field-dialog/add-field-dialog';

@Component({
  selector: 'app-form-builder',
  imports: [FieldRenderer, PlusIcon, AddFieldDialog],
  templateUrl: './form-builder.html',
})
export class FormBuilder {
  private formBuilderService = inject(FormBuilderService);

  addFieldDialog = viewChild<AddFieldDialog>(AddFieldDialog);

  fields = this.formBuilderService.fields;

  openDialog() {
    this.addFieldDialog()?.open();
  }
}
