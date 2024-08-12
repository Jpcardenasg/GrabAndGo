import { Customer } from "./Customer";
import { OrderStatus } from "./OrderStatus";

export interface Order {
    id: number;
    orderDate: string;
    shippingDate: string;
    estimatedDeliveryDate: string;
    status: OrderStatus | null;
    customer: Customer | null;
}


export type OrderResults = Order[];


export interface OrderField {
    header: string;
    name: string;
    type: string;
}