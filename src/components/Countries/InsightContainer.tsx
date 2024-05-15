import React from "react";
import "./Countries.scss";
import { BorderCountries, CountryInsightsData } from "../../types";
import { useNavigate } from "react-router-dom";
import Btn from "../Common/Btn";
import _ from "lodash";
import BackLight from "../../assets/icons/BackLight.svg";

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
          customClass={""}
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={BackLight} alt="back" />
          Back
        </Btn>
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
                  <span className="value">
                    {Object.values(insightData.name.nativeName)
                      .map((item: any) => {
                        return item.common;
                      })
                      .join(", ")}
                  </span>
                </span>
                <span className="data">
                  <span className="label">Population: </span>
                  <span className="value">{insightData.population}</span>
                </span>
                <span className="data">
                  <span className="label">Region: </span>
                  <span className="value">{insightData.region}</span>
                </span>
                <span className="data">
                  <span className="label">SubRegion: </span>
                  <span className="value">{insightData.subregion}</span>
                </span>
                <span className="data">
                  <span className="label">Capital: </span>
                  <span className="value">
                    {_.isArray(insightData.capital)
                      ? insightData.capital.join(", ")
                      : insightData.capital}
                  </span>
                </span>
              </div>
              <div className="details-column">
                <span className="data">
                  <span className="label">Top Level Domain: </span>
                  <span className="value">{insightData.tld.join(", ")}</span>
                </span>
                <span className="data">
                  <span className="label">Currencies: </span>
                  <span className="value">
                    {Object.values(insightData.currencies)
                      .map((item: any) => {
                        return item.name;
                      })
                      .join(", ")}
                  </span>
                </span>
                <span className="data">
                  <span className="label">Languages: </span>
                  <span className="value">
                    {" "}
                    {Object.values(insightData.languages)
                      .map((item: any) => {
                        return item;
                      })
                      .join(", ")}
                  </span>
                </span>
              </div>
            </div>
            <div className="border-countries-wrap data">
              {!_.isEmpty(borderCountries) && (
                <span className="label">Border Countries: </span>
              )}
              <div className="neightbours">
                {borderCountries.map((countries: BorderCountries) => (
                  <Btn
                    customClass=""
                    onClick={() => {
                      navigate(`/insights/${countries.cioc}`);
                    }}
                  >
                    {countries.name.official}
                  </Btn>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InsightContainer;
