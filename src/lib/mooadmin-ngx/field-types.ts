
export interface Field {
    inputType: string;
    /**
     * a property name of model api
     */
    model: string;
    required: boolean;
}

export interface StringField extends Field {
    placeholder: string;
    label: string;

}

export interface BooleanField extends Field {
    checked: true;
}

export interface HiddenField extends Field {

}


export class Fields {
    static textField(c: Partial<StringField>): StringField {
        return c as StringField;
    }

    static hiddenField(c: Partial<HiddenField>): HiddenField {
        return c as HiddenField;
    }

    static radioField(c: Partial<BooleanField>): BooleanField {
        return c as BooleanField;
    }
}
