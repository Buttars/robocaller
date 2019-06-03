import { Injectable } from '@angular/core';

import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

import { Campaign, createInitalState } from './campaign.model';

import { AngularFirestore } from '@angular/fire/firestore';

import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AuthQuery } from '@robocaller/auth';

export interface CampaignsState extends EntityState<Campaign> {}

@Injectable({
  providedIn: 'root',
})
@StoreConfig({
  name: 'campaigns',
  resettable: true,
})
export class CampaignsStore extends EntityStore<CampaignsState, Campaign> {
  constructor(private authQuery: AuthQuery, private afs: AngularFirestore) {
    super(createInitalState());
    this.authQuery.user$
      .pipe(
        switchMap(user => {
          if (!user.uid) {
            return of({ campaigns: [] });
          }
          return this.afs.doc(`campaigns/${user.uid}`).valueChanges();
        })
      )
      .subscribe(campaigns => {
        this.update(campaigns);
      });
  }
}
