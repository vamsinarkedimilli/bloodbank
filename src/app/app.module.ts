import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DonateComponent } from './donate/donate.component';
import {RouterModule} from "@angular/router";
import {approutesModule} from "./approutes.module";
import {BloodgroupsComponent} from "./bloodgroups/bloodgroups.component";
import {DonationsComponent} from "./donations/donations.component";
import {FindbloodComponent} from "./findblood/findblood.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DonateComponent,
    BloodgroupsComponent,
    DonationsComponent,
    FindbloodComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        approutesModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
