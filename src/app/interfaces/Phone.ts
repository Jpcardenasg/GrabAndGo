export interface PhoneType {
    id: number;
    name: string;
}

export type PhoneTypeResults = PhoneType[];

export interface PhoneTypeField {
    header: string;
    name: string;
    type: string;
}

// Phone

export interface Phone {
    id: number;
    prefix: number;
    number: number;
    phoneType: PhoneType;
}

export type PhoneResults = Phone[];

export interface PhoneField {
    header: string;
    name: string;
    type: string;
}

