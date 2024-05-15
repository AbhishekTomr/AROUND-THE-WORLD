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
}

export interface ILableValue {
  label: string;
  value: string;
}

export type fetchCountryType =
  | FETCH_COUNTRIES_TYPE.ALL
  | FETCH_COUNTRIES_TYPE.REGION
  | FETCH_COUNTRIES_TYPE.COUNTRY;
