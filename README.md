# Angular Form Playground

### Configure, build & test reactive forms

A hands-on sandbox to explore OOP in Angular through dynamic reactive form generation. Configure fields visually and see the form built in real time.

---

### OOP Architecture

The core idea is that every form field is modeled as a class, not a plain object.
This make the form configuration strongly typed, extensible, and easy to reason about.

Each field extends a base `FormField` class that defines the shared contract:

```ts
abstract class FormField {
  public id: string = crypto.randomUUID();

  constructor(
    public label: string,
    public placeholder: string,
  ) {
    this.label = label;
    this.placeholder = placeholder;
  }

  abstract getType(): FieldType;
}

class TextField extends FormField {
  inputType: InputType;

  constructor(label: string, placeholder: string, inputType: InputType) {
    super(label, placeholder);
    this.inputType = inputType;
  }

  getType(): FieldType {
    return 'text';
  }
}
```

Adding a new field type means extending the base class - no conditionals, no scattered configs, just a new class.

## Features

- Dynamic form generation driven by a class-based field model
- Supported field types: `text`, `email`, `number`
- Per-field configuration: label and placeholder
- Build with Angular reactive forms

## Roadmap

- [ ] Output panel - display form value and validation state in real time
- [ ] More field types - `select`, `checkbox`, `textarea`
- [ ] Field validations - required, min, max, pattern
- [ ] Export generated form as Angular code

## Tech Stack

- Angular 21
- TypeScript - OOP class-based field modeling
- Reactive Forms
- Signals

---

> [!IMPORTANT]
> This project is a learning playground focused on applying OOP principles
> in an Angular context. Not intended for production use.
