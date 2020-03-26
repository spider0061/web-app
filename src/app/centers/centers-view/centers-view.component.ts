import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CentersService } from '../centers.service';

@Component({
  selector: 'mifosx-centers-view',
  templateUrl: './centers-view.component.html',
  styleUrls: ['./centers-view.component.scss']
})
export class CentersViewComponent implements OnInit {

  centerViewData: any;

  constructor(private route: ActivatedRoute,
    private centersService: CentersService
    ) {
     this.route.data.subscribe((data: { centerViewData: any }) => {
      this.centerViewData = data.centerViewData;
    }); }

  ngOnInit() {
  }

}
