import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { TodoComponent } from "./todo/todo/todo.component";
import { LoginComponent } from "./auth/login/login.component";
import { NF404Component } from "./components/nf404/nf404.component";

import { AddCvComponent } from "./cv/add-cv/add-cv.component";
import { CvComponent } from "./cv/cv/cv.component";
import { DetailsCvComponent } from "./cv/details-cv/details-cv.component";

import { authenticationGuard } from "./auth/guards/authentication.guard";
import { TestFromOfComponent } from "./components/test-from-of/test-from-of.component";
import { TestObservableComponent } from "./components/test-observable/test-observable.component";
import { TestPureComponent } from "./components/test-pure/test-pure.component";
import { TestSliderComponent } from "./rxjs/test-slider/test-slider.component";
import { MergeReduceScanComponent } from "./rxjs/merge-reduce-scan/merge-reduce-scan.component";

const routes: Route[] = [
  { path: "", redirectTo: "cv", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "fromOf", component: TestFromOfComponent },
  { path: "testObservable", component: TestObservableComponent },
  { path: "pure", component: TestPureComponent },
  { path: "slider", component: TestSliderComponent },
  { path: "mergescanreduce", component: MergeReduceScanComponent },
  {
    path: "cv",
    component: CvComponent,
  },
  {
    path: "cv/add",
    component: AddCvComponent,
    canActivate: [authenticationGuard],
  },
  { path: "cv/:id", component: DetailsCvComponent },
  { path: "todo", component: TodoComponent },
  { path: "**", component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
