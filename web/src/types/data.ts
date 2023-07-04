const JSON_VALUE_TYPE_NAMES = ['boolean', 'number', 'string', 'null'] as const;
const JSON_VALUE_TYPE_NAMES_S: readonly string[] = JSON_VALUE_TYPE_NAMES;

export type JsonValue = boolean | number | string | null;

export interface JsonObject {
  [key: string]: JsonValue;
}

export type JsonArray = JsonObject[];

export const isJsonObject = (data: any): data is JsonObject => 
  typeof data === 'object' && Object.values(data).every((value) => JSON_VALUE_TYPE_NAMES_S.includes(typeof value));

export const isJsonArray = (data: any): data is JsonArray => Array.isArray(data) && data.every(isJsonObject);
