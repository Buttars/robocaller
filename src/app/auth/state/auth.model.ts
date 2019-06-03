import { ID } from '@datorama/akita';

export interface Auth {
  uid: ID;
  email: string;
  photoURL?: string;
  displayName?: string;
}

export const createInitalState = () => {
  return {
    uid: '',
    email: '',
    photoURL: '',
    displayName: '',
  } as Auth;
};
