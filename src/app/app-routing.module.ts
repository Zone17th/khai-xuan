import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PublicLayoutComponent} from "./layout/public-layout/public-layout.component";

const routes: Routes = [
  {
    path: '', component: PublicLayoutComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'home', loadChildren: () => import('./feature-module/que-boi/que-boi.module').then(m => m.QueBoiModule)},
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
