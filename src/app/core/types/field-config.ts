export type FieldConfig =
  | { type: 'text' | 'email' | 'number'; label: string; placeholder: string }
  | { type: 'select'; label: string; placeholder: string; options: string[] };
