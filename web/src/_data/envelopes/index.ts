import type { Envelope } from '_data/types';

export const ENVELOPES: Envelope[] = [
  {
    id: 'envelope-1',
    title: 'Bills',
    description: 'Monthly charges',
    balance: 0.0,
    created_at: new Date(Date.now()).getTime(),
    updated_at: new Date(Date.now()).getTime(),
  },
  {
    id: 'envelope-2',
    title: 'Food & drink',
    description: 'Living that nightlife',
    balance: 0.0,
    created_at: new Date(Date.now()).getTime(),
    updated_at: new Date(Date.now()).getTime(),
  },
  {
    id: 'envelope-2',
    title: 'Housing',
    description: 'Everyone needs shelter',
    balance: 0.0,
    created_at: new Date(Date.now()).getTime(),
    updated_at: new Date(Date.now()).getTime(),
  }
];
