export function serializeStringToInteger(data: string = null) {
  const numberSerialized = parseInt(data);
  if (numberSerialized) {
    if (numberSerialized === 0) return null;
    return numberSerialized;
  }
  return null;
}
