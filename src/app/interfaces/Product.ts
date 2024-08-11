import { Supplier } from "./Supplier";

export interface Product {
    id: number;
    name: string;
    gamma: string | null;
    description: string;
    supplier: Supplier | null;
    sellPrice: number;
    supplierPrice: number | null;
}


export type ProductResults = Product[];

export interface ProductField {
    header: string;
    name: string;
    type: string;
}

// ProductGamma

export interface ProductGamma {
    id: number;
    textDescription: string;
    htmlDescription: string;
    image: string;
}

export type ProductGammaResults = ProductGamma[];

export interface ProductGammaField {
    header: string;
    name: string;
    type: string;
}
