import { Product } from "./Product";

export interface Inventory {
    id: number;
    minStock: number | null;
    maxStock: number | null;
    currentStock: number;
    product: Product;
}
