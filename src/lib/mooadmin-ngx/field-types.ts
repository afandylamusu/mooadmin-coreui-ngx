
export interface Field {
    type: string;
    inputType: string;
    label: string;
    model: string;
    require: boolean;
}

export interface TextField extends Field {
    placeholder: string;
}