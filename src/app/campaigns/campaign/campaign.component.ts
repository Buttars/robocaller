import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Campaign } from '../state';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css'],
})
export class CampaignComponent implements OnInit {
  @Input() campaign: Campaign;
  @Input() expanded = false;
  @Output() toggleCampaign = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
