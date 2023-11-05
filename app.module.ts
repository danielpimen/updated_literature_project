import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormService } from './form.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateCiteComponent } from './create-cite/create-cite.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateCiteComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
