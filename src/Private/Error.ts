class TemplateError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'Tempalte';
  }

  override toString(): string {
    return this.message;
  }
}
export default TemplateError;
