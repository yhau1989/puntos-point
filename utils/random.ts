export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomFloat(min: number, max: number): string {
  const randomFloat = Math.random() * (max - min) + min;
  return randomFloat.toLocaleString('de-DE');
}
