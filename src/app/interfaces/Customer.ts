import { City, CityId } from "./LocationModels";
import { Contacts, CustomerContact } from "./CustomerContact";
import { Employee } from "./Employee";
import { Order } from "./Order";
import { User } from "./User";
import { SavePhone } from "./Phone";

export interface Customer {
    id: string;
    name: string;
    email: string;
    lastName: string;
    address: string;
    postalCode: number;
    city_id: string;
    contactsCustomer: Contacts;
    employee_id: string | null;
    order: Order | null;
    user_id: string;
}

export interface SaveCustomer {
    idNumber: string,
    username: string,
    password: string,
    name: string,
    lastName: string,
    address: string,
    postalCode: string,
    city: CityId,
    phone: SavePhone,
}

export type CustomerResults = Customer[];


export interface CustomerField {
    header: string;
    name: string;
    type: string;
}