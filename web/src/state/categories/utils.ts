import type { JsonArray, JsonObject } from 'types/data';
import { getStringValue } from 'utils/data';

import type { Merchant } from './types';

export const getResponseMerchant = (value: JsonObject): Merchant => {
  const merchant: Merchant = {
    id: getStringValue(value['id']),
    code: getStringValue(value['code']),
    description: getStringValue(value['description']),
  };

  return merchant;
};

export const getResponseMerchants = (values: JsonArray): Merchant[] => values.map(getResponseMerchant);
