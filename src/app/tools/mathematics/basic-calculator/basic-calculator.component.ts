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
      title: 'Basic Calculator - W3Tool',
      date: new Date(),
      description: 'Basic Calculator is a free online tool for basic mathematical operations',
      keywords: ["online tools", "converter", "calculator", "random generator", "color picker", "word counter"]
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
