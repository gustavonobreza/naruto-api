export function serializeStringToInteger(data?: string) {
  if (!data) return;
  const numberSerialized = parseInt(data);
  if (numberSerialized) {
    if (numberSerialized === 0) return;
    return numberSerialized;
  }
  return;
}
