import { Employee } from "./Employee";
import { Customer } from "./Customer";

export interface User {
    id: number;
    username: string;
    password: string;
    role: string;
    employee: Employee | null;
    customer: Customer | null;
}

export interface UserId {
    id: number;
}

export type UserResults = User[];

export interface UserField {
    header: string;
    name: string;
    type: string;
}

export interface UserLogin {
    username: string;
    password: string;
}

export interface UserLogged {
    username: string;
    role: string;
    token: string;
}

export interface SaveUser {
    username: string;
    password: string;
    role: string;
}
