import { Supplier } from "./Supplier";

export interface Product {
    id: number;
    name: string;
    gamma: string;
    description: string;
    supplier: Supplier;
    sellPrice: number;
    supplierPrice: number;
}


export interface ProductResults {
    products: Product[];
}

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


export interface ProductGammaResults {
    productsGamma: ProductGamma[];
}

export interface ProductGammaField {
    header: string;
    name: string;
    type: string;
}
