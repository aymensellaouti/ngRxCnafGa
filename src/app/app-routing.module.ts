import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { TodoComponent } from './todo/todo/todo.component';
import { LoginComponent } from './auth/login/login.component';
import { NF404Component } from './components/nf404/nf404.component';

import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { CvComponent } from './cv/cv/cv.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';

import { authenticationGuard } from './auth/guards/authentication.guard';

const routes: Route[] = [
  { path: '', redirectTo: "cv", pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'cv',
    component: CvComponent,
  },
  { path: 'cv/add', component: AddCvComponent, canActivate: [authenticationGuard] },
  { path: 'cv/:id', component: DetailsCvComponent },
  { path: 'todo', component: TodoComponent },
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
