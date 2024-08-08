import { Employee } from "./Employee";
import { Customer } from "./Customer";

export interface User {
    id: Number;
    username: String;
    password: string;
    role: String;
    employee: Employee;
    customer: Customer;
}

export interface UserResults {
    Users: User[];
}

export interface UserField {
    header: string;
    name: string;
    type: string;
}

