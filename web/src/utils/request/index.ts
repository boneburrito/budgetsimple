import cachedXHR from './cached-request';

import type { APISettings, RequestOptions, RequestOptionsValidated, ResponseTuple } from './types';

let API_SETTINGS: APISettings = {
  url: 'http://localhost:8000',
  token: sessionStorage?.getItem('api-token') ?? undefined,
};

function getQueryParams(options: RequestOptions) {
  const params = options.params ?? {};
  const paramsArray = Object.keys(params).map((key) => `${key}=${params[key]}`);
  return paramsArray.join('&');
}

export function setSettings(settings: APISettings) {
  if (settings) {
    API_SETTINGS = settings;
  }
}

export function setToken(token: string) {
  API_SETTINGS.token = token;
  sessionStorage?.setItem('api-token', token);
}

const getOptions = (optionsMixed: RequestOptions | string): RequestOptionsValidated => {
  if (typeof optionsMixed === 'string') {
    return {
      expires: 0,
      method: 'GET',
      url: optionsMixed,
      token: API_SETTINGS.token,
    };
  }

  return {
    expires: 0,
    method: 'GET',
    token: API_SETTINGS.token,
    ...optionsMixed,
  };
};

export const request = async (optionsMixed: RequestOptions | string): Promise<ResponseTuple> => {
  if (!API_SETTINGS.url) throw new Error(`API settings aren't available`);

  const options: RequestOptionsValidated = getOptions(optionsMixed);

  let paramsString = '';

  if (options.method === 'GET' && options.params && Object.keys(options.params).length) {
    paramsString = `?${getQueryParams(options)}`;
  }

  options.url = `${API_SETTINGS.url}/${options.url}${paramsString}`;

  return cachedXHR(options);
}

export const requestGet = async (path: string, params?: RequestOptions['params']) => await request({
  headers: {
    'Content-type': 'application/json'
  },
  method: 'GET',
  params: params,
  url: path
});

export const requestPost = async (path: string, params?: RequestOptions['params']) => await request({
  headers: {
    'Content-type': 'application/json'
  },
  method: 'POST',
  params: params,
  url: path
});

export const requestUpload = async (path: string, formData: FormData) => await request({
  method: 'PUT',
  formData,
  url: path
});

export const requestPut = async (path: string, params?: RequestOptions['params']) => await request({
  headers: {
    'Content-type': 'application/json'
  },
  method: 'PUT',
  params: params,
  url: path
});
