import { Injectable } from '@angular/core';

import { QueryEntity } from '@datorama/akita';

import { CampaignsStore, CampaignsState } from './campaigns.store';
import { Campaign } from './campaign.model';

@Injectable({
  providedIn: 'root',
})
export class CampaignsQuery extends QueryEntity<CampaignsState, Campaign> {
  campaigns$ = this.select();

  constructor(protected store: CampaignsStore) {
    super(store);
  }
}
