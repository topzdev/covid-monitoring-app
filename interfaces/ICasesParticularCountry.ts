interface ICountryCase {
  id: string;
  country_name: string;
  total_cases: string;
  active_cases: string;
  total_deaths: string;
  new_deaths: string;
  total_recovered: string;
  serious_critical: string;
  region: null | string;
  total_cases_per1m: string;
  record_date: string;
}

interface ICaseParticularCountry {
  country: string;
  stat_by_country: Array<ICountryCase>;
}
b524fe1fd9msh56229c6e424eb30p157990jsn8bcb8561964d;
