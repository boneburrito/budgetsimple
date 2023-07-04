import type { JsonArray, JsonObject } from 'types/data';

export interface ColorsState {
  colors: Color[];
}

export interface Color extends JsonObject {
  id: string;
  name: string;
  hex: string;
}

export const hasTypedProperty = (obj: JsonObject, field: string, type: 'boolean' | 'number' | 'string' | 'null') =>
  Object.prototype.hasOwnProperty.call(obj, field) && typeof obj[field] === type;

export const isColorObj = (obj: JsonObject): obj is Color =>
  hasTypedProperty(obj, 'id', 'number') &&
  hasTypedProperty(obj, 'name', 'string') &&
  hasTypedProperty(obj, 'hex', 'string');

export const isColorArray = (arr: JsonArray): arr is Color[] => arr.every(isColorObj);
