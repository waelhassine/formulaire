export interface Address {
  properties: {
    id: string;
    label: string;
    name: string;
    postcode: string; // Add postcode
    city: string; // Add city
    country: string; // Add country
  };
}


export type AddressPostal = {
  postal_code: string;
  country_code: string;
  latitude: string;
  longitude: string;
  city: string;
  state: string;
  city_en: string;
  state_en: string;
  state_code: string;
  province: string;
  province_code: string;
};
