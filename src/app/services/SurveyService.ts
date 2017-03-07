import { Injectable } from '@angular/core';
import {SimpleQuestion} from "../models/QuestionModels";

// Services are Singleton objects. The lifetime of these are managed by Angular itself
@Injectable()
export class SurveyService {
    constructor(private api: APIService) {

    }

    questions: SimpleQuestion[];
    current: int;

    getQuestion(index: int)

    startSurvey()
    submitAnswers()
}