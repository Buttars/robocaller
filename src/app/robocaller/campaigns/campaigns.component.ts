import { Component, OnInit } from '@angular/core';

import { CampaignsQuery, Campaign, CampaignsService } from '@robocaller/campaigns';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css'],
})
export class CampaignsComponent implements OnInit {
  campaigns$: Observable<Campaign[]>;

  constructor(private query: CampaignsQuery, private campaignService: CampaignsService) {}

  ngOnInit() {
    this.query.campaigns$.subscribe(campaignsState => {
      this.campaigns$ = of(campaignsState.campaigns as Array<Campaign>);
    });
  }

  toggleCampaign = (campaign: Campaign) => {
    this.campaignService.toggleCampaign(campaign);
  };

  newCampaign = (campaign: Campaign) => {};
}
