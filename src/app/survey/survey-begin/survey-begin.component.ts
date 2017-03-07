import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {SurveyService} from "../../services/SurveyService";

@Component({
    selector: 'begin-survey',
    templateUrl: './survey-begin.component.html'
})
export class SurveyBeginComponent {
    constructor(private router: Router, private surveyService: SurveyService) {
    }

    startSurvey() {
        this.router.navigate(['/questions', 0]);
    }
}