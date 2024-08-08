import { City } from "./LocationModels";
import { CustomerContact } from "./CustomerContact";
import { Employee } from "./Employee";
import { Order } from "./Order";   
import { User } from "./User";

export interface Customer {
    id: string;
    name: string;
    lastName: string;
    address: string;
    postalCode: number;
    city: City;
    customerContact: CustomerContact;
    employee: Employee;
    order: Order;
    user: User;
}

export interface CustomerResults {
    customers: Customer[];
}

export interface CustomerField {
    header: string;
    name: string;
    type: string;
}