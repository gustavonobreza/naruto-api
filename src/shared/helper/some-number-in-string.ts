export function someNumberInString(str: string): boolean {
  return str.split('').some((letter) => Number(letter));
}
