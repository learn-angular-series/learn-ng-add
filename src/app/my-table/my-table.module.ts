import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTableComponent } from './my-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MyTableRoutingModule } from './my-table-routing.module';

@NgModule({
  declarations: [MyTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MyTableRoutingModule
  ]
})
export class MyTableModule { }
