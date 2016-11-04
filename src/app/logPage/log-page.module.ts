import { NgModule }      from '@angular/core';
import { CommonModule }      from '@angular/common';

import { LogPageComponent } from './log-page.component';

import { LogPageRoutingModule } from './log-page-routing.module';

@NgModule({
  imports:      [ CommonModule, LogPageRoutingModule ],
  declarations:      [
    LogPageComponent,
  ]
})

export class LogPageModule { }
