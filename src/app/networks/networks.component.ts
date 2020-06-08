import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-networks',
  templateUrl: './networks.component.html',
  styleUrls: ['./networks.component.scss']
})
export class NetworksComponent {
  @Input() fieldProjectNetwork: FormGroup;
  networks = ['youtube', 'facebook', 'instagram', 'snapchat', 'desktop', 'mobile'];

  constructor() { }
}
