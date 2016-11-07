import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataNameEnum } from '../../../types/data-name-enum';
import { NumberInputPanel } from '../panels/number-input-panel/number-input-panel';

@Component({
  moduleId: module.id,
  selector: 'log-bodyweight-component',
  templateUrl: 'log-bodyweight.component.html',
  styleUrls: ['log-bodyweight.component.scss']
})

export class LogBodyWeightComponent {
  logType: DataNameEnum;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

}
