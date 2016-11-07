import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { DataNameEnum } from '../types/data-name-enum';

import { LogBodyWeightComponent }    from './components/bodyweight/log-bodyweight.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'logpage' + '/' + DataNameEnum.BODY_WEIGHT.toString(),
      component: LogBodyWeightComponent
    }
  ])],
  exports: [RouterModule]
})

export class LogPageRoutingModule {}
