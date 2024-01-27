import { isJsonArray, isJsonObject } from 'types/data';

import type { CacheValue, RequestOptionsValidated, ResponseData, ResponseTuple, SimpleResponse } from './types';

const cache: { [key: string]: CacheValue } = {};

const setCacheValue = (cacheKey: string, partial: Partial<CacheValue>) => {
  const cacheData: CacheValue = {
    data: null,
    error: null,
    expires: 0,
    response: null,
    ...partial,
  };
  cache[cacheKey] = cacheData;
  return cacheData;
};

const getJsonObject = async (response: Response): Promise<ResponseData | null> => {
  const data = await response.json();

  if (isJsonArray(data)) {
    return { type: 'array', value: data };
  } else if (isJsonObject(data)) {
    return { type: 'object', value: data };
  }

  return null;
};

const getResponseBody = async (response: Response): Promise<ResponseData | null> => {
  if (response.headers.get('Content-type') === 'application/json') {
    return await getJsonObject(response);
  } else {
    return { type: 'text', value: await response.text() };
  }
};

const getSimpleResponse = (response: Response | null): SimpleResponse | null =>
  (response ? { status: response?.status ?? 0 } : null);

const cachedRequest = (options: RequestOptionsValidated): Promise<ResponseTuple> => {
  return new Promise((resolve, reject) => {
    const now = new Date().getTime();
    const cacheKey = options.url;
    const cachedData = cache[cacheKey];
  
    if (cachedData) {
      const expires = cachedData.expires;
  
      if (expires > now) {
        if (cachedData.error) {
          reject(cachedData.error);
        } else {
          resolve([cachedData.data, getSimpleResponse(cachedData.response)]);
        }
      }
    }

    const info: RequestInit = {
      method: options.method,
      headers: {
        'Authorization': options.token ? `Token ${options.token}` : '',
        ...options.headers,
      },
      body: options.formData,
    };

    if (options.params && (options.method === 'POST' || options.method === 'PUT')) {
      info.body = JSON.stringify(options.params);
    }
  
    fetch(options.url, info).then((response) => {
      getResponseBody(response).then((data) => {
        if (options.method === 'GET') {
          const cacheData = setCacheValue(cacheKey, { data, expires: options.expires, response });
          resolve([data, getSimpleResponse(cacheData.response)]);
        } else {
          resolve([data, getSimpleResponse(response)]);
        }
      });
    }).catch((error) => {
      const cacheData: CacheValue = {
        data: null,
        error,
        expires: options.expires,
        response: null,
      };
      cache[cacheKey] = cacheData;

      reject(error);
    });
  });
};

export default cachedRequest;
