import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TextareaField as TextareaFieldModel } from '@core/models/textarea-field';
import { TextCaptionIcon } from '@icons/text-caption-icon/text-caption-icon';

@Component({
  selector: 'app-textarea-field',
  imports: [ReactiveFormsModule, TextCaptionIcon],
  templateUrl: './textarea-field.html',
})
export class TextareaField {
  field = input.required<TextareaFieldModel>();
  control = input.required<FormControl>();
}
