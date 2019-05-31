import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, MaterialModule],
  exports: [NavComponent],
})
export class CoreUiModule {}
