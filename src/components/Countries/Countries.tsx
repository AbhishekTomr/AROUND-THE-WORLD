import React from "react";
import { ICountryData } from "../../types";
import _ from "lodash";
import CountryCard from "./CountryCard";
import "./Countries.scss";

type Props = {
  countries: ICountryData[];
};

const Countries = ({ countries }: Props) => {
  return (
    <div className="countries-wrap">
      {_.isEmpty(countries) ? (
        <h5>No Countries Found!!!</h5>
      ) : (
        <>
          {countries.map((country: ICountryData) => {
            return <CountryCard country={country} />;
          })}
        </>
      )}
    </div>
  );
};

export default Countries;
