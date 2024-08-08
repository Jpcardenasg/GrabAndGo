import { City } from "./LocationModels";

export interface Office {
    id: number;
    postalCode: string;
    address1: string;
    address2: string;
    city: City;
}

export interface OfficeResults {
    offices: Office[];
}

export interface OfficeField {
    header: string;
    name: string;
    type: string;
}