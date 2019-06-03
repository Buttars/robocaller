import { Component, OnInit } from '@angular/core';

import { CampaignsQuery, CampaignsStore } from '@robocaller/campaigns';
import { CampaignsService } from 'src/app/campaigns';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css'],
})
export class CampaignsComponent implements OnInit {
  campaigns$;

  constructor(private store: CampaignsStore, private query: CampaignsQuery, private s: CampaignsService) {}

  ngOnInit() {
    this.campaigns$ = this.query.campaigns$;
  }
}
