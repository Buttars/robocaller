import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModule } from '@robocaller/auth';
import { MaterialModule } from '@robocaller/material';

import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, MaterialModule, AuthModule],
  exports: [NavComponent],
})
export class CoreUiModule {}
