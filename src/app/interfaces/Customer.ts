import { City, CityId } from "./LocationModels";
import { Contacts, CustomerContact } from "./CustomerContact";
import { Order } from "./Order";
import { SavePhone } from "./Phone";
import { UserId } from "./User";
import { EmployeeId } from "./Employee";

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

export interface NewCustomer {
    id: string,
    name: string,
    lastName: string,
    address: string,
    postalCode: string,
    user: UserId,
    city: CityId,
    employee: EmployeeId;
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