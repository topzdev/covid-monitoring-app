interface ILatestStatByCountry {
  id: string;
  country_name: string;
  total_cases: string;
  new_cases: string;
  active_cases: string;
  total_deaths: string;
  new_deaths: string;
  total_recovered: string;
  serious_critical: string;
  region: string | null;
  total_cases_per1m: string;
  record_date: string;
}

interface ILastestStatByCountryInfo {
  country: string;
  latest_stat_by_country: Array<ILastestStatByCountryInfo>;
}

export { ILastestStatByCountryInfo, ILatestStatByCountry };
