import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCampaignDialogComponent } from './new-campaign-dialog.component';
import { MaterialModule } from '@robocaller/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NewCampaignDialogComponent', () => {
  let component: NewCampaignDialogComponent;
  let fixture: ComponentFixture<NewCampaignDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewCampaignDialogComponent],
      imports: [BrowserAnimationsModule, MaterialModule, ReactiveFormsModule],
      providers: [{ provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: {} }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCampaignDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
