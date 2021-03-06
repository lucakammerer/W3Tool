import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MetaService } from 'src/app/services/meta.service';
import apiKeys from 'src/assets/private/api-keys.json';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cryptocurrency-convert',
  templateUrl: './cryptocurrency-convert.component.html',
  styleUrls: ['./cryptocurrency-convert.component.sass']
})
export class CryptocurrencyConvertComponent implements OnInit {
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

  units = ["USD [United States Dollar]","EUR [Euro]","AUD [Australian Dollar]","CAD [Canadian Dollar]","CHF [Swiss Franc]","BTC [Bitcoin]","ETH [Ethereum]","USDT [Tether]","BNB [BNB]","USDC [USD Coin]","XRP [XRP]","LUNA [Terra]","ADA [Cardano]","SOL [Solana]","AVAX [Avalanche]","Dot [Polkadot]","BUSD [Binance USD]","DOGE [Dogecoin]","UST [TerraUSD]","SHIB [Shiba Inu]","MATIC [Polygon]","WBTC [Wrapped Bitcoin]","DAI [Dai]","CRO [Cronos]","ATOM [Cosmos]","LTC [Litecoin]","NEAR [NEAR Protocol]","LINK [Chainlink]","TRX [TRON]","UNI [Uniswap]"]
  unitsAsUri = ["USD","EUR","AUD","CAD","CHF","BTC","ETH","USDT","BNB","USDC","XRP","LUNA","ADA","SOL","AVAX","Dot","BUSD","DOGE","UST","SHIB","MATIC","WBTC","DAI","CRO","ATOM","LTC","NEAR","LINK","TRX","UNI"]
  defaultValues = [this.units[0], this.units[1]]
  valueInUSD = 0;
  currentValue = 0;
  result = "";

  apiKeyCrypto = ""
  apiKeyFiat = ""

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _metaTags: MetaService
  ) {
    var routeUrl = this.route.snapshot.params['un'];
    routeUrl ? routeUrl = routeUrl.split("-") : routeUrl

    _metaTags.setBasicMetaTags({
      title: this.route.snapshot.params['un'] != null
        ? routeUrl[0].toUpperCase() + ' to ' + routeUrl[1].toUpperCase() + ' - Cryptocurrency Converter Tool'
        : 'Cryptocurrency Converter - Convert between different Cryptocurrencies',
      date: new Date(),
      description: this.route.snapshot.params['un'] != null
        ? 'Convert' + routeUrl[0].toUpperCase() + ' to ' + routeUrl[1].toUpperCase() + '. The Cryptocurrency Conversion Tool is a free tool for calculating between BTC (Bitcoin), ETH (Ethereum), ADA (Cardano), DOGE (Dogecoin) and more. The prices are refreshing permanently.'
        : 'The Cryptocurrency Conversion Tool is a free tool for calculating between BTC (Bitcoin), ETH (Ethereum), ADA (Cardano), DOGE (Dogecoin) and more. The prices are refreshing permanently.',
      keywords: ["cryptocurrency converter", "free cryptocurrency converter", "cryptocurrency calculator", "cryptocurrency calculation tool", "crypto currency", "cryptocurrency tool"]
    });
  }

  timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async fetchCryptocurrency() {
    let response = await fetch("https://api.nomics.com/v1/currencies/ticker?key=" + this.apiKeyCrypto + "&ids=BTC,ETH,USDT,BNB,USDC,XRP,LUNA,ADA,SOL,AVAX,DOT,BUSD,DOGE,UST,SHIB,MATIC,WBTC,DAI,CRO,ATOM,LTC,NEAR,LINK,TRX,UNI&interval=1s,1d&convert=USD&per-page=100&page=1")
    let data = await response.json()
    return data;
  }

  async fetchFiatCurrency() {
    let responseOne = await fetch("https://free.currconv.com/api/v7/convert?q=EUR_USD,AUD_USD&compact=ultra&apiKey=" + this.apiKeyFiat)
    let responseTwo = await fetch("https://free.currconv.com/api/v7/convert?q=CAD_USD,CHF_USD&compact=ultra&apiKey=" + this.apiKeyFiat)
    let dataOne = await responseOne.json()
    let dataTwo = await responseTwo.json()
    return [dataOne, dataTwo];
  }

  async convert (){
    this.activity = true
    let cryptoInUSD = await this.fetchCryptocurrency();
    await this.timeout(1000)
    let fiatInUSD = await this.fetchFiatCurrency();
    this.activity = false

    this.currentValue = this.form.value.value.inputValue


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
        this.valueInUSD = this.currentValue * cryptoInUSD[0]["price"]
        break;
      case this.units[6]:
        this.valueInUSD = this.currentValue * cryptoInUSD[1]["price"]
        break;
      case this.units[7]:
        this.valueInUSD = this.currentValue * cryptoInUSD[2]["price"]
        break;
      case this.units[8]:
        this.valueInUSD = this.currentValue * cryptoInUSD[3]["price"]
        break;
      case this.units[9]:
        this.valueInUSD = this.currentValue * cryptoInUSD[4]["price"]
        break;
      case this.units[10]:
        this.valueInUSD = this.currentValue * cryptoInUSD[5]["price"]
        break;
      case this.units[11]:
        this.valueInUSD = this.currentValue * cryptoInUSD[6]["price"]
        break;
      case this.units[12]:
        this.valueInUSD = this.currentValue * cryptoInUSD[7]["price"]
        break;
      case this.units[13]:
        this.valueInUSD = this.currentValue * cryptoInUSD[8]["price"]
        break;
      case this.units[14]:
        this.valueInUSD = this.currentValue * cryptoInUSD[9]["price"]
        break;
      case this.units[15]:
        this.valueInUSD = this.currentValue * cryptoInUSD[10]["price"]
        break;
      case this.units[16]:
        this.valueInUSD = this.currentValue * cryptoInUSD[11]["price"]
        break;
      case this.units[17]:
        this.valueInUSD = this.currentValue * cryptoInUSD[12]["price"]
        break;
      case this.units[18]:
        this.valueInUSD = this.currentValue * cryptoInUSD[13]["price"]
        break;
      case this.units[19]:
        this.valueInUSD = this.currentValue * cryptoInUSD[14]["price"]
        break;
      case this.units[20]:
        this.valueInUSD = this.currentValue * cryptoInUSD[15]["price"]
        break;
      case this.units[21]:
        this.valueInUSD = this.currentValue * cryptoInUSD[16]["price"]
        break;
      case this.units[22]:
        this.valueInUSD = this.currentValue * cryptoInUSD[17]["price"]
        break;
      case this.units[23]:
        this.valueInUSD = this.currentValue * cryptoInUSD[18]["price"]
        break;
      case this.units[24]:
        this.valueInUSD = this.currentValue * cryptoInUSD[19]["price"]
        break;
      case this.units[25]:
        this.valueInUSD = this.currentValue * cryptoInUSD[20]["price"]
        break;
      case this.units[26]:
        this.valueInUSD = this.currentValue * cryptoInUSD[21]["price"]
        break;
      case this.units[27]:
        this.valueInUSD = this.currentValue * cryptoInUSD[22]["price"]
        break;
      case this.units[28]:
        this.valueInUSD = this.currentValue * cryptoInUSD[23]["price"]
        break;
      case this.units[29]:
        this.valueInUSD = this.currentValue * cryptoInUSD[24]["price"]
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
        this.result = (this.valueInUSD / cryptoInUSD[0]["price"]).toString()
        break;
      case this.units[6]:
        this.result = (this.valueInUSD / cryptoInUSD[1]["price"]).toString()
        break;
      case this.units[7]:
        this.result = (this.valueInUSD / cryptoInUSD[2]["price"]).toString()
        break;
      case this.units[8]:
        this.result = (this.valueInUSD / cryptoInUSD[3]["price"]).toString()
        break;
      case this.units[9]:
        this.result = (this.valueInUSD / cryptoInUSD[4]["price"]).toString()
        break;
      case this.units[10]:
        this.result = (this.valueInUSD / cryptoInUSD[5]["price"]).toString()
        break;
      case this.units[11]:
        this.result = (this.valueInUSD / cryptoInUSD[6]["price"]).toString()
        break;
      case this.units[12]:
        this.result = (this.valueInUSD / cryptoInUSD[7]["price"]).toString()
        break;
      case this.units[13]:
        this.result = (this.valueInUSD / cryptoInUSD[8]["price"]).toString()
        break;
      case this.units[14]:
        this.result = (this.valueInUSD / cryptoInUSD[9]["price"]).toString()
        break;
      case this.units[15]:
        this.result = (this.valueInUSD / cryptoInUSD[10]["price"]).toString()
        break;
      case this.units[16]:
        this.result = (this.valueInUSD / cryptoInUSD[11]["price"]).toString()
        break;
      case this.units[17]:
        this.result = (this.valueInUSD / cryptoInUSD[12]["price"]).toString()
        break;
      case this.units[18]:
        this.result = (this.valueInUSD / cryptoInUSD[13]["price"]).toString()
        break;
      case this.units[19]:
        this.result = (this.valueInUSD / cryptoInUSD[14]["price"]).toString()
        break;
      case this.units[20]:
        this.result = (this.valueInUSD / cryptoInUSD[15]["price"]).toString()
        break;
      case this.units[21]:
        this.result = (this.valueInUSD / cryptoInUSD[16]["price"]).toString()
        break;
      case this.units[22]:
        this.result = (this.valueInUSD / cryptoInUSD[17]["price"]).toString()
        break;
      case this.units[23]:
        this.result = (this.valueInUSD / cryptoInUSD[18]["price"]).toString()
        break;
      case this.units[24]:
        this.result = (this.valueInUSD / cryptoInUSD[19]["price"]).toString()
        break;
      case this.units[20]:
        this.result = (this.valueInUSD / cryptoInUSD[20]["price"]).toString()
        break;
      case this.units[21]:
        this.result = (this.valueInUSD / cryptoInUSD[21]["price"]).toString()
        break;
      case this.units[22]:
        this.result = (this.valueInUSD / cryptoInUSD[22]["price"]).toString()
        break;
      case this.units[23]:
        this.result = (this.valueInUSD / cryptoInUSD[23]["price"]).toString()
        break;
      case this.units[24]:
        this.result = (this.valueInUSD / cryptoInUSD[24]["price"]).toString()
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

    this.apiKeyCrypto = apiKeys["cryptocurrency"]
    this.apiKeyFiat = apiKeys["currency"]
  }

}
