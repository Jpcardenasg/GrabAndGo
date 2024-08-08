import { City } from "./LocationModels";
import { Phone } from "./Phone";

export interface Customer {
    idNumber: string;
    username: string;
    password: string;
    name: string;
    lastName: string;
    address: string;
    postalCode: number;
    telephone: number;
    city: City;
    phone: Phone;
}

export interface CustomerResults {
    customers: Customer[];
}

export interface CustomerField {
    header: string;
    name: string;
    type: string;
}