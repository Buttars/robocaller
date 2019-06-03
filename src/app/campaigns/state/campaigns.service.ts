import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AuthQuery } from '@robocaller/auth';

import { CampaignsStore } from './campaigns.store';
import { Campaign } from './campaign.model';

@Injectable({
  providedIn: 'root',
})
export class CampaignsService {
  constructor(private store: CampaignsStore, private authQuery: AuthQuery, private afs: AngularFirestore) {
    this.authQuery.user$
      .pipe(
        switchMap(user => {
          if (!user.uid) {
            return of({ campaigns: [] });
          }
          return this.afs.doc(`campaigns/${user.uid}`).valueChanges();
        })
      )
      .subscribe((campaigns: { campaigns: Array<Campaign> }) => {
        this.store.update(campaigns.campaigns);
      });
  }
}
