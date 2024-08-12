import { Customer } from "./Customer";
import { Phone } from "./Phone";

export interface CustomerContact {
    id: number;
    email: string;
    customer: Customer;
    phone: Phone;
}

export interface CustomerContactIN {
    id: number;
    email: string;
}

export type Contacts = CustomerContactIN[];

export type CustomerContactResults = CustomerContact[];


export interface CustomerContactField {
    header: string;
    name: string;
    type: string;
}