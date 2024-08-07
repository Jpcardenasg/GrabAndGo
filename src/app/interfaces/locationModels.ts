export interface Country {
    id: number;
    name: string;
}

export interface Region {
    id: number;
    name: string;
    country: Country;
}

export interface City {
    id: number;
    name: string;
    region: Region;
}

