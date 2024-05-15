import { FETCH_COUNTRIES_TYPE } from "./constants";

export interface ICountryData {
  capital: string[] | string;
  flags: {
    png: string;
    alt: string;
    svg: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: Record<string | number, unknown>;
  };
  population: number;
  region: string;
  cioc: string;
  cca2: string;
}

export interface ILableValue {
  label: string;
  value: string;
}

export type fetchCountryType =
  | FETCH_COUNTRIES_TYPE.ALL
  | FETCH_COUNTRIES_TYPE.REGION
  | FETCH_COUNTRIES_TYPE.COUNTRY;

export interface CountryInsightsData {
  name: {
    common: string;
    official: string;
    nativeName: Record<string | number, unknown>;
  };
  flags: {
    png: string;
    alt: string;
    svg: string;
  };
  languages: Record<string | number, unknown>;
  population: number;
  capital: string[] | string;
  region: string;
  subregion: string;
  tld: string[];
  currencies: Record<string | number, unknown>;
  borders: string[];
}

export interface BorderCountries {
  name: {
    common: string;
    official: string;
    nativeName: Record<string | number, unknown>;
  };
  cioc: string;
}
