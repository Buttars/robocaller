import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Campaign } from '../state';

@Component({
  selector: 'app-new-campaign-dialog',
  templateUrl: './new-campaign-dialog.component.html',
  styleUrls: ['./new-campaign-dialog.component.scss'],
})
export class NewCampaignDialogComponent implements OnInit {
  form = this.fb.group({
    title: ['', Validators.required],
    description: [''],
    steps: this.fb.array([''], Validators.required),
    phones: this.fb.array([this.fb.group({ area: [''], prefix: [''], line: [''] })], Validators.required),
  });

  constructor(
    public dialogRef: MatDialogRef<NewCampaignDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private fb: FormBuilder
  ) {}

  ngOnInit() {}

  newCampaign = () => {
    return {
      title: this.title.value,
      description: this.title.value,
      steps: this.steps.value,
      phones: this.phones.value.map(({ area, prefix, line }) => `${area}${prefix}${line}`),
      scheduled: false,
    } as Campaign;
  };

  addPhone = () => {
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: [],
    });
    this.phones.push(phone);
  };

  removePhone = index => {
    this.phones.removeAt(index);
  };

  addStep = () => {
    this.steps.push(this.fb.control(''));
  };

  removeStep = index => {
    this.steps.removeAt(index);
  };

  get title() {
    return this.form.get('title');
  }

  get description() {
    return this.form.get('description');
  }

  get phones() {
    return this.form.get('phones') as FormArray;
  }

  get steps() {
    return this.form.get('steps') as FormArray;
  }
}
