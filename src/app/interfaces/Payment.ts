import { Customer } from "./Customer";

export interface Payment {
    id: number;
    date: string;
    total: number;
    customer: Customer;
    paymentMethod: PaymentMethod;
}

export type PaymentResults = Payment[];


export interface PaymentField {
    header: string;
    name: string;
    type: string;
}

// PaymentMethod

export interface PaymentMethod {
    id: number;
    name: string;
}

export type PaymentMethodResults = PaymentMethod[];

export interface PaymentMethodField {
    header: string;
    name: string;
    type: string;
}