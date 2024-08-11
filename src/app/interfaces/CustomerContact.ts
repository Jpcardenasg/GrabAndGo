import { Customer } from "./Customer";
import { Phone } from "./Phone";

export interface CustomerContact {
    id: number;
    email: string;
    customer: Customer;
    phone: Phone;
}

export type CustomerContactResults = CustomerContact[];


export interface CustomerContactField {
    header: string;
    name: string;
    type: string;
}