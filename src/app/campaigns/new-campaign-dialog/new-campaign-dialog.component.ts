import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-campaign-dialog',
  templateUrl: './new-campaign-dialog.component.html',
  styleUrls: ['./new-campaign-dialog.component.css'],
})
export class NewCampaignDialogComponent implements OnInit {
  form = this.fb.group({
    title: ['', Validators.required],
  });

  constructor(
    public dialogRef: MatDialogRef<NewCampaignDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private fb: FormBuilder
  ) {}

  ngOnInit() {}
}
