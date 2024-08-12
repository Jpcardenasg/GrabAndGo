export interface Country {
    id: number;
    name: string;
}

export type CountryResults = Country[];


export interface CountryField {
    header: string;
    name: string;
    type: string;
}

export interface Region {
    id: number;
    name: string;
    country: Country;
}

export type RegionResults = Region[];


export interface RegionField {
    header: string;
    name: string;
    type: string;
}

export interface City {
    id: number;
    name: string;
    region: Region;
}

export interface CityId {
    id: number;
}

export type CityResults = City[];


export interface CityField {
    header: string;
    name: string;
    type: string;
}

