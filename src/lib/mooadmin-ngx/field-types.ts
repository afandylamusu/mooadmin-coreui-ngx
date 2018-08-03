
export interface Field {
    type: string;
    inputType: string;
    label: string;
    model: string;
    required: boolean;
}

export interface TextField extends Field {
    placeholder: string;
}


export class Fields {
    static textField(c: TextField): TextField {
        return c;
    }
}
