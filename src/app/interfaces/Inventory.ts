import { Product } from "./Product";

export interface Inventory {
    id: number;
    minStock: number | null;
    maxStock: number | null;
    currentStock: number;
    product: Product;
}

export type InventoryResults = Inventory[];


export interface InventoryField {
    header: string;
    name: string;
    type: string;
}