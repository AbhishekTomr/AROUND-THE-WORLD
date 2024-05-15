import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import { fetchCountryDetails } from "../../services/countries.services";
import { Box, CircularProgress } from "@mui/material";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import Btn from "../Common/Btn";
import { CountryInsightsData } from "../../types";
import InsightContainer from "./InsightContainer";
import { getCountryNameViaCode } from "../../services/countries.services";
import { BorderCountries } from "../../types";

type Props = {};

type params = {
  countryCode: string;
};

function CountryInsights({}: Props) {
  const { countryCode = "" } = useParams<params>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const [countryData, setCountryData] = useState<CountryInsightsData | null>(
    null
  );
  const [borderCountries, setBorderCountries] = useState<BorderCountries[]>([]);

  const fetchCountryInsights = async () => {
    try {
      setIsLoading(true);
      if (_.isEmpty(countryCode)) {
        throw new Error("Invalid Country!!!");
      }
      const data = await fetchCountryDetails(countryCode);
      setCountryData(data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCountryInsights();
  }, [countryCode]);

  const getBorderCountriesData = async (borders: string[]) => {
    try {
      setIsLoading(true);
      const data = await Promise.all(
        borders.map(async (code: string) => {
          return await getCountryNameViaCode(code);
        })
      );
      setBorderCountries(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    getBorderCountriesData(countryData?.borders || []);
  }, [countryData]);

  return (
    <div className="App">
      <Header />
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "20vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress color="info" />
        </Box>
      ) : (
        <InsightContainer
          insightData={countryData}
          borderCountries={borderCountries}
        />
      )}
    </div>
  );
}

export default CountryInsights;
