import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'begin-survey',
    templateUrl: './survey-begin.component.html'
})
export class SurveyBeginComponent {
    constructor(private router: Router) {
    }

    startSurvey() {
        this.router.navigate(['/questions', 0]);
    }
}