export class AnimalError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AnimalError";
  }
}