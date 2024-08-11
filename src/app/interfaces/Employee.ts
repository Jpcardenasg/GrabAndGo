import { Office } from "./Office";
import { User } from "./User";

export interface Employee {
    id: number;
    name: String;
    lastName1: string;
    lastName2: string;
    email: string;
    extencion: string;
    position: string;
    user: User;
    telephone: number;
    boss: Employee;
    office: Office;
}

export type EmployeeResults = Employee[];

export interface EmployeeField {
    header: string;
    name: string;
    type: string;
}