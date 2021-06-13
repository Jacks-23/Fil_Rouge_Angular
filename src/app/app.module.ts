import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AjoutComponent } from './candidat/ajout/ajout.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import { ReponseComponent } from './candidat/reponse/reponse.component';

@NgModule({
  declarations: [
    AppComponent,
    AjoutComponent,
    ReponseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // AngularMaterial,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
