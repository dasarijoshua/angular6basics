import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponentComponent } from './view-component/view-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  exports:[ViewComponentComponent],
  declarations: [ViewComponentComponent]
})
export class ViewModule { }
