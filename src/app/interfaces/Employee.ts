import { Office } from "./Office";
import { User } from "./User";

export interface Employee {
    id: string;
    name: String;
    lastName: string;
    email: string;
    extension: string;
    position: string;
    user: string;
    boss: string | null;
    office: number;
}

export type EmployeeResults = Employee[];

export interface EmployeeField {
    header: string;
    name: string;
    type: string;
}