import React from "react";
import "./Countries.scss";
import { BorderCountries, CountryInsightsData } from "../../types";
import { useNavigate } from "react-router-dom";
import Btn from "../Common/Btn";
import _ from "lodash";

type Props = {
  insightData: CountryInsightsData | null;
  borderCountries: BorderCountries[];
};

const InsightContainer = ({ insightData, borderCountries }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="insights-wrap">
      <div className="insights-header">
        <Btn
          btnText={"<- Back"}
          customClass={""}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      {_.isEmpty(insightData) ? (
        <h3>No Data Present Please go back or refresh the page</h3>
      ) : (
        <div className="insights-container">
          <div className="flag-wrap">
            <img src={insightData.flags.png} alt={insightData.flags.alt} />
          </div>
          <div className="details-wrap">
            <h2 className="country-name">{insightData.name.official}</h2>
            <div className="country-details">
              <div className="details-column">
                <span className="data">
                  <span className="label">Native Name: </span>
                  <span className="value">{"abba jabba"}</span>
                </span>
                <span className="data">
                  <span className="label">Population: </span>
                  <span className="value">{121313131}</span>
                </span>
                <span className="data">
                  <span className="label">Region: </span>
                  <span className="value">{"Europe"}</span>
                </span>
                <span className="data">
                  <span className="label">SubRegion: </span>
                  <span className="value">{"W.E"}</span>
                </span>
                <span className="data">
                  <span className="label">Capital: </span>
                  <span className="value">{"Delhi"}</span>
                </span>
              </div>
              <div className="details-column">
                <span className="data">
                  <span className="label">Top Level Domain: </span>
                  <span className="value">{"Belgie"}</span>
                </span>
                <span className="data">
                  <span className="label">Currencies: </span>
                  <span className="value">{121313131}</span>
                </span>
                <span className="data">
                  <span className="label">Languages: </span>
                  <span className="value">{"Europe"}</span>
                </span>
              </div>
            </div>
            <div className="border-countries-wrap data">
              <span className="label">Border Countries: </span>
              {borderCountries.map((countries: BorderCountries) => (
                <Btn
                  btnText={countries.name.official}
                  customClass=""
                  onClick={() => {
                    navigate(`/insights/${countries.cioc}`);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InsightContainer;
