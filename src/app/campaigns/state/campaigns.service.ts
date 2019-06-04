import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { AuthQuery } from '@robocaller/auth';

import { Campaign } from './campaign.model';
import { CampaignsStore } from './campaigns.store';

@Injectable({
  providedIn: 'root',
})
export class CampaignsService {
  campaignsCollection$: AngularFirestoreCollection<Campaign>;

  constructor(private afs: AngularFirestore, private authQuery: AuthQuery, private store: CampaignsStore) {
    this.authQuery.uid$.subscribe(uid => {
      this.campaignsCollection$ = this.afs.doc(`users/${uid}`).collection('campaigns');
    });
  }

  newCampaign = (campaign: Campaign) => {};

  toggleCampaign = (campaign: Campaign) => {
    const toggledCampaign = { ...campaign, scheduled: !campaign.scheduled };

    this.store.update({
      campaigns: [toggledCampaign],
    });

    return this.campaignsCollection$.doc(campaign.id).set(toggledCampaign);
  };
}
