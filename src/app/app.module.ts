import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {SurveyBeginComponent} from "./survey/survey-begin/survey-begin.component";
import {QuestionComponent} from "./survey/questions/question.component";

@NgModule({
    declarations: [
        AppComponent,
        SurveyBeginComponent,
        QuestionComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(rootRouterConfig, {useHash: true})
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
