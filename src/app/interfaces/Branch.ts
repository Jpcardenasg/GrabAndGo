import { City } from "./LocationModels";
import { Supplier } from "./Supplier";

export interface Branch {
    nit: number;
    name: String;
    supplier: Supplier;
    city: City;
}

export interface BranchResults {
    branches: Branch[];
}

export interface BranchField {
    header: string;
    name: string;
    type: string;
}