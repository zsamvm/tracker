import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DataNameEnum } from '../../../types/data-name-enum';

@Component({
  moduleId: module.id,
  selector: 'tile-view-component',
  templateUrl: 'tile-view.component.html',
  styleUrls: ['tile-view.component.scss']
})

export class TileViewComponent {
  constructor(private router: Router) {
  }

  onSelect(tileName: DataNameEnum) {
    this.router.navigate(['/logpage', tileName.toString()]);
  }

  // TODO: get tiles to display from backend
  // Here hard code it
  tilesToDisplay: DataNameEnum[] = [DataNameEnum.BODY_WEIGHT];
}
