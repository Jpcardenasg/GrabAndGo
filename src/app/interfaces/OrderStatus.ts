export interface OrderStatus {
    id: number;
    name: string;
}

export type OrderStatusResults = OrderStatus[];


export interface OrderStatusField {
    header: string;
    name: string;
    type: string;
}