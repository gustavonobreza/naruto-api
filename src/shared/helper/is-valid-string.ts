import { isString } from 'class-validator';
import { someNumberInString } from './some-number-in-string';

export function isValidString(data: string): boolean {
  const _isString = isString(data);
  if (!_isString) return false;

  const hasSomeNumber = someNumberInString(data);
  if (!hasSomeNumber) {
    return true;
  }

  return false;
}
