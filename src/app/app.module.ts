import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "app/app-routing.module";
import { SharedModule } from "app/shared/shared.module";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryProjectsService } from "../test/in-memory-projects.service";
import { CoreModule } from "app/core/core.module";
import { AuthService } from "app/core/services/auth.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryProjectsService, { delay: 600 }),


    // Routes get loaded in order. It is important that login
    // come before AppRoutingModule, as
    // AppRoutingModule defines the catch-all ** route
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule, 
    CoreModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
