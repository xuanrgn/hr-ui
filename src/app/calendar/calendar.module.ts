import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { BrowserModule } from '@angular/platform-browser';
import { DxSchedulerModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { throwIfAlreadyLoaded } from 'src/app/shared/module-import.guard';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CalendarComponent,
  },
];

@NgModule({
  declarations: [CalendarComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    DxSchedulerModule,
    HttpClientModule,

  ]
})
export class CalendarModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CalendarModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CalendarModule');
  }
}
