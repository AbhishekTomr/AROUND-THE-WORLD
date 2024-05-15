import { ILableValue } from "./types";

export const regionOptions: ILableValue[] = [
  { value: "africa", label: "Africa" },
  { value: "asia", label: "Asia" },
  { value: "america", label: "America" },
  { value: "europe", label: "Europe" },
  {
    value: "oceania",
    label: "Oceania",
  },
];

export enum FETCH_COUNTRIES_TYPE {
  ALL = "all",
  REGION = "region",
  COUNTRY = "country",
}
