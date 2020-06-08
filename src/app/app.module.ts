import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NetworksComponent } from './networks/networks.component';
import { FormTypeComponent } from './form-type/form-type.component';
import { ProjectLengthComponent } from './project-length/project-length.component';
import { InspirationsComponent } from './inspirations/inspirations.component';

@NgModule({
  declarations: [
    AppComponent,
    NetworksComponent,
    FormTypeComponent,
    ProjectLengthComponent,
    InspirationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
