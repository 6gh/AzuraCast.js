export interface CustomFieldReturn extends CustomField {
  links: {
    self: string;
  };
}

export interface CustomField {
  name: string;
  short_name: string;
  auto_assign: string | null;
  id: number | null;
}
