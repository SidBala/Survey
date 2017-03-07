export class SimpleQuestion<DetailsType> {
    type: string;
    enabled: boolean;
    required: boolean;
    subject: string;
    text: string;
    id: number;
    details: DetailsType;
    constructor(input: any) {
        this.type = input.type;
        this.enabled = input.enabled;
        this.required = input.required;
        this.subject = input.subject;
        this.text = input.text;
        this.id = input.id;
    }
}

export class MultiDetails {
    label: string;
    type: string;
    beginAt: number;
    endAt: number;
    increment: number;
}

export class LabelDetails {
    labels: string[];
    initial: number;
    stepBy: number;
    max: number;
    mid: number;
    min: number;
}

export class ChoiceDetails {
    other: boolean;
    choices: string[];
}

export class MultiQuestion extends SimpleQuestion<MultiDetails[]> {
    constructor(input: any) {
        super(input);
        this.details = input.details; // TODO: Break up init for this such that we initialize the subfields
    }
}

export class ChoiceQuestion extends SimpleQuestion<ChoiceDetails> {
    constructor(input: any) {
        super(input);
        this.details = input.details; // TODO: Break up init for this such that we initialize the subfields
    }
}

export class LabelQuestion extends SimpleQuestion<LabelDetails> {
    constructor(input: any) {
        super(input);
        this.details = input.details; // TODO: Break up init for this such that we initialize the subfields
    }
}

// This map will define what sort of model type to use for each question type
export var TypeToTypeMap: {[id: string]: any;} = {
    "essay":SimpleQuestion,
    "time_picker": SimpleQuestion,
    "multiple_picker": MultiQuestion,
    "multiple_selection": ChoiceQuestion,
    "scale_range": LabelQuestion,
    "yes_no": ChoiceQuestion
};