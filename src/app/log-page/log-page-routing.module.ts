import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { LogPageComponent }    from './log-page.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'logpage', component: LogPageComponent }
  ])],
  exports: [RouterModule]
})

export class LogPageRoutingModule {}
