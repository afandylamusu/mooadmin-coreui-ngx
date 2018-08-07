
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
    static textField(c: StringField): StringField {
        return c;
    }

    static hiddenField(c: HiddenField): HiddenField {
        return c;
    }

    static radioField(c: BooleanField): BooleanField {
        return c;
    }
}
