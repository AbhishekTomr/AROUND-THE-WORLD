import React from "react";
import { ICountryData } from "../../types";
import _ from "lodash";
import "./Countries.scss";
import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

type Props = {
  country: ICountryData;
};

const CountryCard = ({ country }: Props) => {
  const { name, capital, flags, population, region, cioc } = country;
  const navigate = useNavigate();
  return (
    <Card
      className="country-card-wrap"
      onClick={() => {
        navigate(`/insights/${cioc}`);
      }}
    >
      <div className="flag-img-wrap">
        <img src={flags.png} alt={flags.alt} />
      </div>
      <div className="country-data-wrap">
        <h4 className="country-name">{name.official}</h4>
        <div className="country-data">
          <span className="data">
            <span className="label">Population: </span>
            <span className="value">{population}</span>
          </span>
          <span className="data">
            <span className="label">Region: </span>
            <span className="value">{region}</span>
          </span>
          <span className="data">
            <span className="label">Capital: </span>
            <span className="value">
              {_.isArray(capital) ? capital.join(",") : capital}
            </span>
          </span>
        </div>
      </div>
    </Card>
  );
};

export default CountryCard;
