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
