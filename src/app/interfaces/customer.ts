import { City } from "./locationModels";
import { Phone } from "./phone";

export interface Customer {
    username: string;
    password: string;
    idNumber: string;
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