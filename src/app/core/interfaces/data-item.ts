import {Location} from "./api-call";

export interface DataItem {
  first: string;
  last: string;
  gender: string;
  title: string;
  picture: string;
  location: Location;
  state: string;
  country: string;
  city: string;
}
