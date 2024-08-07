import { Customer } from "./Customer";

export interface Payment {
    id: number;
    date: string;
    total: number;
    customer: Customer;
    paymentMethod: PaymentMethod;
}

export interface PaymentResults {
    payments: Payment[];
}


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

export interface PaymentMethodResults {
    paymentMethods: PaymentMethod[];
}

export interface PaymentMethodField {
    header: string;
    name: string;
    type: string;
}