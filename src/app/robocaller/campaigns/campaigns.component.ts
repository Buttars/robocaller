import { Component, OnInit } from '@angular/core';

import { CampaignsQuery, Campaign } from '@robocaller/campaigns';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css'],
})
export class CampaignsComponent implements OnInit {
  campaigns$: Observable<Campaign[]>;

  constructor(private query: CampaignsQuery) {}

  ngOnInit() {
    this.query.campaigns$.subscribe(campaignsState => {
      this.campaigns$ = of(campaignsState.campaigns as Array<Campaign>);
    });
  }
}
