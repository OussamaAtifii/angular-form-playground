import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder } from '@features/form-builder/form-builder';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormBuilder],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-form-playground');
}
