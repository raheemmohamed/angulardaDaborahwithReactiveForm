import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// FormModule used for Template driven approach and ReactiveFromModules or class used for Reactive approach
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customers/customer.component';
import { UsersComponent } from './users/users.component';
import { ReactiveWayBuildFormComponent } from './reactive-way-build-form/reactive-way-build-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    UsersComponent,
    ReactiveWayBuildFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
