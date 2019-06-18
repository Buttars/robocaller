import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { AuthQuery } from '@robocaller/auth';

import { Campaign } from './campaign.model';
import { CampaignsStore } from './campaigns.store';

@Injectable({
  providedIn: 'root',
})
export class CampaignsService {
  campaignsCollection: AngularFirestoreCollection<Campaign>;

  constructor(private afs: AngularFirestore, private authQuery: AuthQuery, private store: CampaignsStore) {
    this.authQuery.uid$.subscribe(uid => {
      if (!uid) {
        return;
      }
      this.campaignsCollection = this.afs.doc(`users/${uid}`).collection('campaigns');
    });
  }

  createCampaign = (campaign: Campaign) => {
    // prettier-ignore
    if (!campaign) { return; }

    campaign.id = this.afs.createId();
    this.campaignsCollection.doc(campaign.id).set(campaign);
  };

  toggleCampaign = (campaign: Campaign) => {
    const toggledCampaign = { ...campaign, scheduled: !campaign.scheduled };

    return this.campaignsCollection.doc(campaign.id).set(toggledCampaign);
  };
}
