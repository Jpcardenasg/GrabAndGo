export interface OrderStatus {
    id: number;
    name: string;
}

export interface OrderStatusResults {
    OrderStatuses: OrderStatus[];
}

export interface OrderStatusField {
    header: string;
    name: string;
    type: string;
}