import { NgModule }      from '@angular/core';
import { CommonModule }      from '@angular/common';

import { LogPageRoutingModule } from './log-page-routing.module';

// log pages
import { LogBodyWeightComponent } from './components/bodyweight/log-bodyweight.component';

// UI panels
import { NumberInputPanel } from './components/panels/number-input-panel/number-input-panel';

@NgModule({
  imports:      [ CommonModule, LogPageRoutingModule ],
  declarations:      [
    // log pages
    LogBodyWeightComponent,

    // UI panels
    NumberInputPanel
  ]
})

export class LogPageModule { }
