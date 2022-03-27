import { AppearanceService } from './../services/appearance.service';
import { Component, OnInit } from '@angular/core';

import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  faCircleHalfStroke = faCircleHalfStroke;
  faInfoCircle = faInfoCircle;

  constructor(public appearance: AppearanceService) { }

  ngOnInit(): void {
  }

}
