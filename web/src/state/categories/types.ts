export interface Merchant {
  id: string;
  code: string;
  description: string;
}

export interface CategoriesState {
  merchants: Merchant[];
}
