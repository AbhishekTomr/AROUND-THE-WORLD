export const fetchAllCountries = async () => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital,cioc,cca2`
    );
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchCountriesByName = async (searchTerm: string) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${searchTerm}?fields=flags,name,population,region,capital,cioc,cca2`
    );
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchCountriesByRegion = async (region: string) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${region}?fields=flags,name,population,region,capital,cioc,cca2`
    );
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchCountryDetails = async (code: string) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${code}?fields=flags,name,population,region,capital,cioc,languages,subregion,tld,currencies,borders`
    );
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getCountryNameViaCode = async (code: string) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${code}?fields=name,cioc`
    );
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
