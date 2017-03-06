import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'question',
    templateUrl: './question.component.html'
})

export class QuestionComponent {
    constructor(private router: Router) {
    }
}