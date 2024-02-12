import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementorBarComponent } from './incrementor-bar/incrementor-bar.component';
import { FormsModule } from '@angular/forms';
import { PieComponent } from './pie/pie.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    IncrementorBarComponent,
    PieComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ],
  exports: [
    IncrementorBarComponent,
    PieComponent
  ]
})
export class ComponentsModule { }
