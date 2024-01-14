import type { JsonArray, JsonObject } from 'types/data';

export type SerializableValue = boolean | number | string | null;

export interface ArrayResponseData {
  type: 'array',
  value: JsonArray;
}

export interface ObjectResponseData {
  type: 'object',
  value: JsonObject;
}

export interface TextResponseData {
  type: 'text',
  value: string;
}

export type ResponseData = ArrayResponseData | ObjectResponseData | TextResponseData;

export interface CacheValue {
  data: ResponseData | null;
  error: any;
  expires: number;
  response: Response | null;
}

export interface RequestOptions {
  body?: Request['body'];
  expires?: number;
  formData?: FormData;
  headers?: Record<string, string>;
  method?: Request['method'];
  params?: { [key in string]: SerializableValue } | null,
  token?: string;
  url: string;
}

export interface RequestOptionsValidated extends RequestOptions {
  expires: number;
  method: Request['method'];
}

export interface SimpleResponse {
  status: number;
}

export type ResponseTuple = [ResponseData | null, SimpleResponse | null];

export interface APISettings {
  token?: string;
  url: string;
}
