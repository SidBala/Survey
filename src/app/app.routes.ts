import {Routes} from "@angular/router";
import {SurveyBeginComponent} from "./survey/survey-begin/survey-begin.component";
import {QuestionComponent} from "./survey/questions/question.component";

export const rootRouterConfig: Routes = [
    {path: '', redirectTo: 'survey', pathMatch: 'full'},
    {path: 'survey', component: SurveyBeginComponent},
    {path: 'questions/:id', component: QuestionComponent},
];