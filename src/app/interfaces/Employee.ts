import { Boss } from "./Boss";
import { Office } from "./Office";
import { User } from "./User";

export interface Employee {
    id: Number;
    name: String;
    lastName1: string;
    lastName2: string;
    email: string;
    extencion: string;
    position: string;
    user: User;
    telephone: number;
    boss: Boss;
    office: Office;
}

export interface EmployeeResults {
    employees: Employee[];
}

export interface EmployeeField {
    header: string;
    name: string;
    type: string;
}