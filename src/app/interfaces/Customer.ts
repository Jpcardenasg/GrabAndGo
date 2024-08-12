import { City, CityId } from "./LocationModels";
import { CustomerContact } from "./CustomerContact";
import { Employee } from "./Employee";
import { Order } from "./Order";
import { User } from "./User";
import { SavePhone } from "./Phone";

export interface Customer {
    id: string;
    name: string;
    lastName: string;
    address: string;
    postalCode: number;
    city: City;
    customerContact: CustomerContact;
    employee: Employee | null;
    order: Order | null;
    user: User;
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