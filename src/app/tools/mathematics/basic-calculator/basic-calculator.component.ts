import {Component, OnInit, Input, Directive} from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-basic-calculator',
  templateUrl: './basic-calculator.component.html',
  styleUrls: ['./basic-calculator.component.sass']
})
export class BasicCalculatorComponent implements OnInit {

  buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', '+', '-', '*', '/', '(', ')', '=', 'AC']
  val = ''

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'Basic Calculator - Simple calculator for basic math operations',
      date: new Date(),
      description: 'The Basic Calculator is a free tool for basic math operations.',
      keywords: ["basic calculator", "free basic calculator", "basic calculator", "simple calculation tool", "calculation tool", "online tool"]
    });
  }

  calc($event) {
    var button = $event.srcElement.innerText;
    if(button === "=") {
      this.val = eval(this.val);
    } else if (button === "AC") {
      this.val = ""
    } else {
      this.val += button;
    }
  }

  ngOnInit(): void {
  }
}
