import { Product } from "./Product";
import { Order } from "./Order";

export interface OrderDetail {
    id: number;
    quantity: string;
    unitPrice: string;
    lineNumber: string;
    product: Product;
    order: Order;
}

export type OrderDetailResults = OrderDetail[];

export interface OrderDetailField {
    header: string;
    name: string;
    type: string;
}