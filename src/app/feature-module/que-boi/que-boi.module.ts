import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { BatQuaiComponent } from './bat-quai/bat-quai.component';
import {QueBoiRoutingModule} from "./que-boi-routing.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    BatQuaiComponent
  ],
  imports: [
    CommonModule,
    QueBoiRoutingModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ]
})
export class QueBoiModule { }
