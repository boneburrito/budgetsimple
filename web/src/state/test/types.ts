import type { JsonObject } from 'types/data';

export interface TestState {
  id: string | null;
}

export interface TestObj extends JsonObject {
  test: string;
}

export const isTestObj = (obj: JsonObject): obj is TestObj =>
  Object.prototype.hasOwnProperty.call(obj, 'test') && typeof obj.test === 'string';
