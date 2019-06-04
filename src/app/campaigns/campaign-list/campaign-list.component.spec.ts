import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModule } from '@robocaller/material';
import { CampaignListComponent } from './campaign-list.component';
import { CampaignComponent } from '../campaign/campaign.component';

describe('CampaignListComponent', () => {
  let component: CampaignListComponent;
  let fixture: ComponentFixture<CampaignListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [CampaignListComponent, CampaignComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
