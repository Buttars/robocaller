import { Directive, Input, OnDestroy, ViewContainerRef, TemplateRef, OnInit } from '@angular/core';

import { untilDestroyed } from 'ngx-take-until-destroy';

import { AuthQuery } from '../state';

@Directive({
  selector: '[appShowIfSignedIn]',
})
export class ShowIfSignedInDirective implements OnInit, OnDestroy {
  @Input('appShowIfSignedIn') showIfSignedIn: boolean;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authQuery: AuthQuery
  ) {}

  ngOnInit() {
    this.authQuery.isSignedIn$.pipe(untilDestroyed(this)).subscribe(isSignedIn => {
      this.viewContainer.clear();

      if (isSignedIn) {
        if (this.showIfSignedIn) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      } else {
        if (this.showIfSignedIn) {
          this.viewContainer.clear();
        } else {
          this.viewContainer.createEmbeddedView(this.templateRef);
        }
      }
    });
  }

  ngOnDestroy() {
    /* This needs to be kept for the untilDestoryed pipe */
  }
}
