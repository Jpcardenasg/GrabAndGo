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