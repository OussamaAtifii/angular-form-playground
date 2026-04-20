export type FieldConfig =
  | { type: 'text' | 'email' | 'number' | 'password'; label: string; placeholder: string }
  | { type: 'select'; label: string; placeholder: string; options: string[] }
  | { type: 'textarea'; label: string; placeholder: string };
