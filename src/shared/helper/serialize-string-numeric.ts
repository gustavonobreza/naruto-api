import { isNumberString } from 'class-validator';

export function serializeStringToInteger(data: string = null) {
  const isNumber = isNumberString(data);
  if (data && isNumber) {
    const _number = parseInt(data);

    if (_number === 0) return null;

    const serialized = _number < 0 ? Math.abs(_number) : _number;
    return serialized;
  }
  return null;
}
