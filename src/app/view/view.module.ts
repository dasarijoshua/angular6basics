import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponentComponent } from './view-component/view-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[ViewComponentComponent],
  declarations: [ViewComponentComponent]
})
export class ViewModule { }
