import countries from "world-countries";


type Country = {  
    name: string;
  code: string;
    flag: string;
    location: {
        lat: number;
        lng: number;
        };
};
export const  getCountries : () => Country[] = ()  => {
  return countries.map((country) => ({
    name: country.name.common,
    code: country.cca2,
    flag: country.flag,
    location: {
      lat: country.latlng[0],
      lng: country.latlng[1],
    },
  }));
};

export const getCountryByCode = (code: string) => {
  return getCountries().find((country) => country.code === code);
}
