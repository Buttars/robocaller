import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@robocaller/material';

import { CampaignComponent } from './campaign/campaign.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { NewCampaignDialogComponent } from './new-campaign-dialog/new-campaign-dialog.component';

@NgModule({
  declarations: [CampaignComponent, CampaignListComponent, NewCampaignDialogComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [CampaignComponent, CampaignListComponent, NewCampaignDialogComponent],
  entryComponents: [NewCampaignDialogComponent],
})
export class CampaignsModule {}
