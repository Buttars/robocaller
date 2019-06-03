import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CampaignsComponent } from './campaigns/campaigns.component';

const routes = [{ path: '', component: CampaignsComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RobocallerRoutingModule {}
