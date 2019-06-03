import { Injectable } from '@angular/core';

import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

import { Campaign, createInitalState } from './campaign.model';

export interface CampaignsState extends EntityState<Campaign> {}

@Injectable({
  providedIn: 'root',
})
@StoreConfig({
  name: 'campaigns',
  resettable: true,
})
export class CampaignsStore extends EntityStore<CampaignsState, Campaign> {
  constructor() {
    super(createInitalState());
  }
}
