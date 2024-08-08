import { Customer } from "./Customer";

export interface Payment {
    id: number;
    date: string;
    total: number;
    customer: Customer;
    paymentMethod: PaymentMethod;
}

export interface PaymentMethod {
    id: number;
    name: string;
}
export interface PaymentMethodResults {
    payments: Payment[];
}

export interface PaymentResults {
    payments: Payment[];
}

export interface PaymentField {
    header: string;
    name: string;
    type: string;
}