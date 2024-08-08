export interface PhoneType {
    id: number;
    name: string;
}

export interface Phone {
    id: number;
    prefix: number;
    number: number;
    phoneType: PhoneType;
}

export interface PhoneResults {
    phones: Phone[];
}

export interface PhoneField {
    header: string;
    name: string;
    type: string;
}

export interface PhoneTypeResults {
    phoneTypes: PhoneType[];
}

export interface PhoneTypeField {
    header: string;
    name: string;
    type: string;
}