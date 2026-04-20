import { NgComponentOutlet } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { ListIcon } from '@icons/list-icon/list-icon';
import { MailIcon } from '@icons/mail-icon/mail-icon';
import { NumberIcon } from '@icons/number-icon/number-icon';
import { TextCaptionIcon } from '@icons/text-caption-icon/text-caption-icon';
import { TextSizeIcon } from '@icons/text-size-icon/text-size-icon';

const FIELD_TYPE_MAP = {
  text: TextSizeIcon,
  number: NumberIcon,
  email: MailIcon,
  select: ListIcon,
  textarea: TextCaptionIcon,
};

type FieldType = keyof typeof FIELD_TYPE_MAP;

@Component({
  selector: 'app-field-icon',
  imports: [NgComponentOutlet],
  templateUrl: './field-icon.html',
})
export class FieldIcon {
  type = input.required<FieldType>();
  iconClass = input<string>();

  icon = computed(() => FIELD_TYPE_MAP[this.type()]);
}
