export interface Supplier {
    nit: Number;
    name: String;
}

export interface SupplierResults {
    suppliers: Supplier[];
}

export interface SupplierField {
    header: string;
    name: string;
    type: string;
}