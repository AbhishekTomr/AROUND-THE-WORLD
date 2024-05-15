export const fetchAllCountries = async () => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital`
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
      `https://restcountries.com/v3.1/name/${searchTerm}`
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
      `https://restcountries.com/v3.1/region/${region}`
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

export const fetchCountryDetails = async (name: string) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${name}?fullText=true`
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
