import { Phone } from "./Phone";

export interface Supplier {
    nit: number;
    name: String;
}

export type SupplierResults = Supplier[];

export interface SupplierField {
    header: string;
    name: string;
    type: string;
}

// supplier contact

export interface SupplierContact {
    id: number;
    name: String;
    lastName: String;
    email: String;
    supplier: Supplier;
    phone: Phone;
}

export type SupplierContactResults = SupplierContact[];

export interface SupplierContactField {
    header: string;
    name: string;
    type: string;


}