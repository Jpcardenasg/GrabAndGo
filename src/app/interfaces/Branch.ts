import { City } from "./LocationModels";
import { Supplier } from "./Supplier";

export interface Branch {
    nit: number;
    name: String;
    supplier: Supplier;
    city: City;
}

export type BranchResults = Branch[];


export interface BranchField {
    header: string;
    name: string;
    type: string;
}