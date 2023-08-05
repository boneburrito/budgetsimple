import type { JsonValue } from 'types/data';

// Bools
export const getBooleanValue = (value: JsonValue, defaultValue = false): boolean =>
  typeof value === 'boolean' ? value : defaultValue;

export const getNullableBooleanValue = (value: JsonValue, defaultValue = null): boolean | null =>
  typeof value === 'boolean' ? value : defaultValue;

// Strings
export const getStringValue = (value: JsonValue, defaultValue = ''): string =>
  typeof value === 'string' ? value : defaultValue;

export const getNullableStringValue = (value: JsonValue, defaultValue: string | null = null): string | null =>
  typeof value === 'string' ? value : defaultValue;

// Numbers
export const getNumberValue = (value: JsonValue, defaultValue = 0): number =>
  typeof value === 'number' ? value : defaultValue;

export const getNullableNumberValue = (value: JsonValue, defaultValue: number | null = null): number | null =>
  typeof value === 'number' ? value : defaultValue;

export const getStringNumberValue = (value: JsonValue, defaultValue = 0): number => {
  if (typeof value === 'number') {
    return value;
  } else if (typeof value === 'string') {
    return Number(value) ?? 0;
  }

  return defaultValue;
};

// Enums
export const getEnumValue = <T extends string>(value: JsonValue, typeChecker: ((val: string) => val is T), defaultValue: T): T => {
  const stringValue = getStringValue(value, '');
  const enumValue: T = typeChecker(stringValue) ? stringValue : defaultValue;
  return enumValue;
};
