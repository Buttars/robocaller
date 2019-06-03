import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { ShowIfSignedInDirective } from './show-if-signed-in/show-if-signed-in.directive';

@NgModule({
  declarations: [LoginComponent, ShowIfSignedInDirective],
  imports: [CommonModule],
  exports: [ShowIfSignedInDirective],
})
export class AuthModule {}
