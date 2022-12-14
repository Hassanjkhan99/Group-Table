export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface Result {
  gender: string;
  name: Name;
  picture: Picture;
  location: Location;
}

export interface Street {
  number: number;
  name: string;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface Timezone {
  offset: string;
  description: string;
}

export interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: string;
  coordinates: Coordinates;
  timezone: Timezone;
}

export interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export interface ApiCall {
  results: Result[];
  info: Info;
}
