import {RouterModule, Routes} from "@angular/router";
import {DonateComponent} from "./donate/donate.component";
import {NgModule} from "@angular/core";
import {BloodgroupsComponent} from "./bloodgroups/bloodgroups.component";

const routes:Routes=[
  {path:'donate',component:DonateComponent},
  {path:'bloodgroups',component:BloodgroupsComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class approutesModule{

}
