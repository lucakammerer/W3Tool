import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MetaService } from 'src/app/services/meta.service';
import apiKeys from 'src/assets/private/api-keys.json';

@Component({
  selector: 'app-currency-convert',
  templateUrl: './currency-convert.component.html',
  styleUrls: ['./currency-convert.component.sass']
})
export class CurrencyConvertComponent implements OnInit {
  form = new FormGroup({
    value: new FormGroup({
      inputValue: new FormControl(),
      outputValue: new FormControl(),
    }),
    selection: new FormGroup({
      inputSelection: new FormControl(),
      outputSelection: new FormControl(),
    }),
  });

  activity: boolean = false;

  units = ["USD [United States Dollar]","EUR [Euro]","AUD [Australian Dollar]","CAD [Canadian Dollar]","CHF [Swiss Franc]","CNY [Chinese Yuan]","GBP [British Pound Sterling]","INR [Indian Rupee]","JPY [Japanese Yen]","MXN [Mexican Peso]",]
  unitsAsUri = ["USD", "EUR", "AUD", "CAD", "CHF", "CNY", "GBP", "INR", "JPY", "MXN"]
  defaultValues = [this.units[0], this.units[1]]
  valueInUSD = 0;
  currentValue = 0;
  result = "";

  apiKey = ""

  constructor(
    public _metaTags: MetaService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    var routeUrl = this.route.snapshot.params['un'];
    routeUrl ? routeUrl = routeUrl.split("-") : routeUrl

    _metaTags.setBasicMetaTags({
      title: this.route.snapshot.params['un'] != null
        ? routeUrl[0].toUpperCase() + ' to ' + routeUrl[1].toUpperCase() + ' - Currency Converter'
        : 'Currency Converter',
      date: new Date(),
      description: this.route.snapshot.params['un'] != null
        ? 'Convert' + routeUrl[0].toUpperCase() + ' to ' + routeUrl[1].toUpperCase() + '. The Currency Converter is a free tool for converting between USD, EURO, AUD, CAD, CHF and more currency units.'
        : 'The Currency Converter is a free tool for converting between USD, EURO, AUD, CAD, CHF and more currency units.',
      keywords: ["currency converter", "free currency converter", "currency calculator", "currency calculation tool", " currency", "currency tool"]
    });
  }

  async fetchFiatCurrency() {
    let responseOne = await fetch("https://free.currconv.com/api/v7/convert?q=EUR_USD,AUD_USD&compact=ultra&apiKey=" + this.apiKey)
    let responseTwo = await fetch("https://free.currconv.com/api/v7/convert?q=CAD_USD,CHF_USD&compact=ultra&apiKey=" + this.apiKey)
    let responseThree = await fetch("https://free.currconv.com/api/v7/convert?q=CNY_USD,GBP_USD&compact=ultra&apiKey=" + this.apiKey)
    let responseFour = await fetch("https://free.currconv.com/api/v7/convert?q=INR_USD,JPY_USD&compact=ultra&apiKey=" + this.apiKey)
    let responseFive = await fetch("https://free.currconv.com/api/v7/convert?q=MXN_USD&compact=ultra&apiKey=" + this.apiKey)
    let dataOne = await responseOne.json()
    let dataTwo = await responseTwo.json()
    let dataThree = await responseThree.json()
    let dataFour = await responseFour.json()
    let dataFive = await responseFive.json()
    return [dataOne, dataTwo, dataThree, dataFour, dataFive];
  }

  async convert (){
    this.currentValue = this.form.value.value.inputValue

    this.activity = true
    let fiatInUSD = await this.fetchFiatCurrency();
    this.activity = false

    switch(this.form.value.selection.inputSelection){
      case this.units[0]:
        this.valueInUSD = this.currentValue
        break;
      case this.units[1]:
        this.valueInUSD = this.currentValue * fiatInUSD[0]["EUR_USD"]
        break;
      case this.units[2]:
        this.valueInUSD = this.currentValue * fiatInUSD[0]["AUD_USD"]
        break;
      case this.units[3]:
        this.valueInUSD = this.currentValue * fiatInUSD[1]["CAD_USD"]
        break;
      case this.units[4]:
        this.valueInUSD = this.currentValue * fiatInUSD[1]["CHF_USD"]
        break;
      case this.units[5]:
        this.valueInUSD = this.currentValue * fiatInUSD[2]["CNY_USD"]
        break;
      case this.units[6]:
        this.valueInUSD = this.currentValue * fiatInUSD[2]["GBP_USD"]
        break;
      case this.units[7]:
        this.valueInUSD = this.currentValue * fiatInUSD[3]["INR_USD"]
        break;
      case this.units[8]:
        this.valueInUSD = this.currentValue * fiatInUSD[3]["JPY_USD"]
        break;
      case this.units[9]:
        this.valueInUSD = this.currentValue * fiatInUSD[4]["MXN_USD"]
        break;
    }
    switch(this.form.value.selection.outputSelection){
      case this.units[0]:
        this.result = this.valueInUSD.toString()
        break;
      case this.units[1]:
        this.result = (this.valueInUSD / fiatInUSD[0]["EUR_USD"]).toString()
        break;
      case this.units[2]:
        this.result = (this.valueInUSD / fiatInUSD[0]["AUD_USD"]).toString()
        break;
      case this.units[3]:
        this.result = (this.valueInUSD / fiatInUSD[1]["CAD_USD"]).toString()
        break;
      case this.units[4]:
        this.result = (this.valueInUSD / fiatInUSD[1]["CHF_USD"]).toString()
        break;
      case this.units[5]:
        this.result = (this.valueInUSD / fiatInUSD[2]["CNY_USD"]).toString()
        break;
      case this.units[5]:
        this.result = (this.valueInUSD / fiatInUSD[2]["GBP_USD"]).toString()
        break;
      case this.units[7]:
        this.result = (this.valueInUSD / fiatInUSD[3]["INR_USD"]).toString()
        break;
      case this.units[8]:
        this.result = (this.valueInUSD / fiatInUSD[3]["JPY_USD"]).toString()
        break;
      case this.units[9]:
        this.result = (this.valueInUSD / fiatInUSD[4]["MXN_USD"]).toString()
        break;
    }
  }

  ngOnInit(): void {
    var routes = this.route.snapshot.params['un'];

    if (routes != null) {
      routes = routes.split("-")

      if (this.unitsAsUri.includes(routes[0].toLowerCase()) && this.unitsAsUri.includes(routes[1].toLowerCase())) {
        this.defaultValues[0] = this.units[this.unitsAsUri.indexOf(routes[0].toLowerCase())]
        this.defaultValues[1] = this.units[this.unitsAsUri.indexOf(routes[1].toLowerCase())]
      }
    }

    this.apiKey = apiKeys["currency"]
  }

}
