import cachedXHR from './cached-request';

import type { APISettings, RequestOptions, RequestOptionsValidated, ResponseTuple } from './types';

let API_SETTINGS: APISettings = {
  url: 'http://localhost:8000',
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

const getOptions = (optionsMixed: RequestOptions | string): RequestOptionsValidated => {
  if (typeof optionsMixed === 'string') {
    return {
      expires: 0,
      method: 'GET',
      url: optionsMixed,
    };
  }

  return {
    expires: 0,
    method: 'GET',
    ...optionsMixed,
  };
};

export const request = async (optionsMixed: RequestOptions | string): Promise<ResponseTuple> => {
  if (!API_SETTINGS.url) throw new Error('API settings aren\'t available');

  let options: RequestOptionsValidated = getOptions(optionsMixed);

  const paramsString = getQueryParams(options);

  options.url = `${API_SETTINGS.url}/${options.url}?${paramsString}`;

  const [data, response] = await cachedXHR(options);

  if (response) {
    if (response.status >= 500) {
      throw new Error(`A server error occurred: ${response?.status}`);
    }
  
    if (response.status >= 400) {
      throw new Error('An user error occurred');
    }
  }

  return [data, response];
}

export const requestGet = async (path: string, params?: RequestOptions['params']) => await request({
  method: 'GET',
  params: params,
  url: path
});
