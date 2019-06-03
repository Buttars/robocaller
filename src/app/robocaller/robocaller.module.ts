import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RobocallerRoutingModule } from './robocaller-routing.module';
import { CampaignsModule } from '../campaigns';

import { CampaignsComponent } from './campaigns/campaigns.component';

@NgModule({
  declarations: [CampaignsComponent],
  imports: [CommonModule, RobocallerRoutingModule, CampaignsModule],
})
export class RobocallerModule {}
