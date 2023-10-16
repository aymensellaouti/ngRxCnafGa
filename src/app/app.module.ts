import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { CvComponent } from './cv/cv/cv.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NF404Component } from './components/nf404/nf404.component';

import { LoginComponent } from './auth/login/login.component';

import { AuthInterceptorProvider } from './auth/interceptors/auth.interceptor';
import { ListComponent } from './cv/list/list.component';
import { ItemComponent } from './cv/item/item.component';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { CvCardComponent } from './cv/cv-card/cv-card.component';
import { TodoComponent } from './todo/todo/todo.component';
import { TestObservableComponent } from './components/test-observable/test-observable.component';
import { TestPureComponent } from './components/test-pure/test-pure.component';
import { CalulFPipe } from './pipes/calul-f.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddCvComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    DetailsCvComponent,
    CvCardComponent,
    EmbaucheComponent,
    DefaultImagePipe,
    TodoComponent,
    NavbarComponent,
    NF404Component,
    LoginComponent,
    TestObservableComponent,
    TestPureComponent,
    CalulFPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
