export interface Country {
    id: number;
    name: string;
}

export interface CountryResults {
    Countries: Country[];
}

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

export interface RegionResults {
    Regiones: Region[];
}

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

export interface CityResults {
    Cities: City[];
}

export interface CityField {
    header: string;
    name: string;
    type: string;
}

