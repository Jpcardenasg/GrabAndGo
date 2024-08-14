
export interface Product {
    id: number;
    name: string;
    productGamma_id: number | null;
    description: string;
    supplier_nit: string | null;
    sellPrice: number | null;
    supplierPrice: number | null;
    img: string | null;

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
