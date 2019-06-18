import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { tap } from 'rxjs/operators';

import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

import { AuthQuery } from '@robocaller/auth';
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
  campaignsCollection;

  constructor(private authQuery: AuthQuery, private afs: AngularFirestore) {
    super(createInitalState());

    this.authQuery.uid$
      .pipe(
        tap(uid => {
          // prettier-ignore
          if (!uid) { return; }
          this.campaignsCollection = this.afs.doc(`users/${uid}`).collection('campaigns');
        })
      )
      .subscribe();

    this.campaignsCollection.valueChanges().subscribe(campaigns => {
      this.update({ campaigns });
    });
  }
}
