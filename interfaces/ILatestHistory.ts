import { ILatestStatByCountry } from "./ILatestStatByCountry";

export interface ILatestHistory {
  country: string;
  stat_by_country: Array<ILatestStatByCountry>;
}
