import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {BatQuaiComponent} from "./bat-quai/bat-quai.component";

const routes: Routes = [
  {path : '', component: BatQuaiComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueBoiRoutingModule {
}
