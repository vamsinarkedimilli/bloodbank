import {RouterModule, Routes} from "@angular/router";
import {DonateComponent} from "./donate/donate.component";
import {NgModule} from "@angular/core";
import {BloodgroupsComponent} from "./bloodgroups/bloodgroups.component";
import {FindbloodComponent} from "./findblood/findblood.component";
import {DonationsComponent} from "./donations/donations.component";

const routes:Routes=[
  {path:'donate',component:DonateComponent},
  {path:'bloodgroups',component:BloodgroupsComponent},
  {path:'findblood',component:FindbloodComponent},
  {path:'blood-donations',component:DonationsComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class approutesModule{

}
