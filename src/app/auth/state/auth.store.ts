import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

import { Auth, createInitalState } from './auth.model';
import { Injectable } from '@angular/core';

export interface AuthState extends EntityState<Auth> {}

@Injectable({
  providedIn: 'root',
})
@StoreConfig({
  name: 'auth',
  resettable: true,
})
export class AuthStore extends EntityStore<AuthState, Auth> {
  constructor() {
    super(createInitalState());
  }
}

export const authStore = new AuthStore();
