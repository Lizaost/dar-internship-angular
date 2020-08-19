export interface NavItem {
  title: string;
  enabled: boolean;
  url: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
}

export interface Address {
  city: string;
  geo: {
    lat: string,
    lng: string
  };
  street: string;
  suite: string;
  zipcode: string;
}

export interface Company {
  bs: string;
  catchPhrase: string;
  name: string;
}

export interface AuthInfo {
  access_token: string;
  expires_in: number;
  id_token: string;
  refresh_token: string;
  token_type: string;
}
