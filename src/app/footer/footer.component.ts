import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {tools} from '../global';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  toolitems: any[] = [];

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    for(var i = 0; i < tools.length; i++) {
      if(tools[i][0].indexOf('-',0) === -1){
        this.toolitems.push(tools[i])
      }
    }
  }

}
