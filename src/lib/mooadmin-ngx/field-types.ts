
export interface Field {
    type: string;
    inputType: string;
    label: string;
    model: string;
    required: boolean;
}

export interface StringField extends Field {
    placeholder: string;
}

export interface BooleanField extends Field {
    checked: true;
}


export class Fields {
    static textField(c: StringField): StringField {
        return c;
    }

    static radioField(c: BooleanField): BooleanField {
        return c;
    }
}
