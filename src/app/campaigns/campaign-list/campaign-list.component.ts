import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Campaign } from '@robocaller/campaigns';
import { NewCampaignDialogComponent } from '../new-campaign-dialog/new-campaign-dialog.component';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css'],
})
export class CampaignListComponent implements OnInit {
  @Input() campaigns: Array<Campaign> = [];
  @Output() newCampaign = new EventEmitter();
  @Output() toggleCampaign = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  addCampaign = () => {
    const dialogRef = this.dialog.open(NewCampaignDialogComponent, {
      width: '500px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      console.log('Closed');
      if (result) {
        this.newCampaign.emit(result);
      }
    });
  };
}
