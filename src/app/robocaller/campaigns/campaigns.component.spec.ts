import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsComponent } from './campaigns.component';
import { CampaignsModule } from '@robocaller/campaigns';
import { MaterialModule } from '@robocaller/material';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

describe('CampaignsComponent', () => {
  let component: CampaignsComponent;
  let fixture: ComponentFixture<CampaignsComponent>;

  const FirestoreStub = {
    collection: (name: string) => ({
      doc: (id: string) => ({
        valueChanges: () => new BehaviorSubject({ campaigns: [] }),
        set: (d: any) => new Promise((resolve, reject) => resolve()),
      }),
    }),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CampaignsModule, MaterialModule],
      declarations: [CampaignsComponent],
      providers: [{ provide: AngularFirestore, useValue: FirestoreStub }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
