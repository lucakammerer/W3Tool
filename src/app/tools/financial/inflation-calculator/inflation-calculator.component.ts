import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { MetaService } from 'src/app/services/meta.service';
import apiKeys from 'src/assets/private/api-keys.json';

@Component({
  selector: 'app-inflation-calculator',
  templateUrl: './inflation-calculator.component.html',
  styleUrls: ['./inflation-calculator.component.sass']
})
export class InflationCalculatorComponent implements OnInit {

  form = new FormGroup({
    dates: new FormGroup({
      startValue: new FormControl(),
      endValue: new FormControl(),
    }),
    startPrice: new FormControl(),
    countrySelection: new FormControl(),
    outputValue: new FormControl(),
  });

  activity: boolean = false;

  units = [
    "United States",
    "United Kingdom",
    "Switzerland",
    "Japan",
    "Italy",
    "France",
    "Euro Area",
    "Germany",
    "Canada",
  ]
  defaultValue = this.units[0]
  valueInUSD = 0;
  currentValue = 0;
  dataInJSON = {}
  start = 0
  end = 0
  percentValue = 0
  result = "";

  apiKey = "";

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'Inflation Calculator - W3Tool',
      date: new Date(),
      description: 'Inflation Calculator is a free online tool for calculating inflation rates for a given amount of money over a given period of time.',
      keywords: ["online tools", "converter", "calculator", "random generator", "color picker", "word counter"]
    });
  }

  async fetchInflation(country, start, end, amount) {

    var countryInCPI = "CPI_USA"

    switch (country) {
      case "United States":
        countryInCPI = "CPI_USA"
        break;
      case "United Kingdom":
        countryInCPI = "CPI_GBR"
        break;
      case "Switzerland":
        countryInCPI = "CPI_CHE"
        break;
      case "Japan":
        countryInCPI = "CPI_JPN"
        break;
      case "Italy":
        countryInCPI = "CPI_ITA"
        break;
      case "France":
        countryInCPI = "CPI_FRA"
        break;
      case "Euro Area":
        countryInCPI = "CPI_EUR"
        break;
      case "Germany":
        countryInCPI = "CPI_DEU"
        break;
      case "Canada":
        countryInCPI = "CPI_CAN"
        break;
    }

    let response = await fetch("https://data.nasdaq.com/api/v3/datasets/RATEINF/" + countryInCPI + "?start_date=" + start + "&end_date=" + end + "&api_key=" + this.apiKey)
    let data = await response.json()
    return data;
  }

  async convert (){
    this.activity = true
    this.dataInJSON = await this.fetchInflation(this.form.value.countrySelection, this.form.value.dates.startValue, this.form.value.dates.endValue, this.form.value.startPrice)
    this.start = this.dataInJSON["dataset"]["data"][this.dataInJSON["dataset"]["data"].length - 1][1]
    this.end = this.dataInJSON["dataset"]["data"][0][1]

    this.percentValue = parseInt(this.form.value.startPrice) * (this.end - this.start)/this.start
    this.percentValue += parseInt(this.form.value.startPrice)
    this.result = this.percentValue.toString()

    this.activity = false
  }

  ngOnInit(): void {
    this.apiKey = apiKeys["inflation"]
  }

}
