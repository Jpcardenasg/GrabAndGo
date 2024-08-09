export interface Product {
    id: number;
    name: string;
    description: string;
    supplier: string;
    gamma: string;
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
