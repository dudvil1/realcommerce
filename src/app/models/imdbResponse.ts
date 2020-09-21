import { ImdbItem } from './item';

export interface ImdbResponse {
  results: ImdbItem[];
  totalResults: string;
}
