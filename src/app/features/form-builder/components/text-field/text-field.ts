import { Component, computed, input } from '@angular/core';
import { MailIcon } from '@icons/mail-icon/mail-icon';
import { TextSizeIcon } from '@icons/text-size-icon/text-size-icon';
import { TextField as TextFieldModel } from '@core/models/text-field';
import { NumberIcon } from '@icons/number-icon/number-icon';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-field',
  imports: [MailIcon, TextSizeIcon, NumberIcon, ReactiveFormsModule],
  templateUrl: './text-field.html',
})
export class TextField {
  field = input.required<TextFieldModel>();
  control = input.required<FormControl>();

  placeholder = computed(() => this.field().placeholder + '...');
}
