import { Customer } from "./Customer";
import { OrderStatus } from "./OrderStatus";

export interface Order {
    id: number,
    orderDate: string,
    shippingDate: string,
    estimatedDeliveryDate: string,
    status: OrderStatus,
    customer: Customer;
}


export interface OrderResults {
    orders: Order[];
}

export interface OrderField {
    header: string;
    name: string;
    type: string;
}