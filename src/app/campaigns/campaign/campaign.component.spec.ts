import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignComponent } from './campaign.component';
import { MaterialModule } from '@robocaller/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Campaign } from '../state';

describe('CampaignComponent', () => {
  let component: CampaignComponent;
  let fixture: ComponentFixture<CampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MaterialModule],
      declarations: [CampaignComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.campaign = {
      id: '123',
      title: 'Generic Test Campaign',
      description: 'Generic Test Campaign',
      lastRan: Date.now(),
      scheduled: true,
      steps: ['This is the first step', 'This is the second step'],
    } as Campaign;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
