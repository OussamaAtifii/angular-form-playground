import { Component, computed, input } from '@angular/core';
import { MailIcon } from 'app/shared/icons/mail-icon/mail-icon';
import { TextSizeIcon } from 'app/shared/icons/text-size-icon/text-size-icon';
import { TextField as TextFieldModel } from '@core/models/text-field';
import { NumberIcon } from 'app/shared/icons/number-icon/number-icon';
import { InputType } from '@core/types/input-type';

@Component({
  selector: 'app-text-field',
  imports: [MailIcon, TextSizeIcon, NumberIcon],
  templateUrl: './text-field.html',
})
export class TextField {
  field = input.required<TextFieldModel>();

  placeholder = computed(() => this.field().placeholder + '...');
}
