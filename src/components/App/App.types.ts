export interface ResponsePage {
  results: ItemPage[];
  total: number;
  total_pages: number;
}

export interface ItemPage {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  description: string;
}
