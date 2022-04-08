import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'basic-calculator', loadChildren: () => import('./tools/mathematics/basic-calculator/basic-calculator.module').then(m => m.BasicCalculatorModule) },
  { path: 'advanced-calculator', loadChildren: () => import('./tools/mathematics/advanced-calculator/advanced-calculator.module').then(m => m.AdvancedCalculatorModule) },
  { path: 'financial-calculator', loadChildren: () => import('./tools/mathematics/financial-calculator/financial-calculator.module').then(m => m.FinancialCalculatorModule) },
  { path: 'percent', loadChildren: () => import('./tools/engineering/percent-calculator/percent-calculator.module').then(m => m.PercentCalculatorModule) },
  { path: 'programming-calculator', loadChildren: () => import('./tools/mathematics/programming-calculator/programming-calculator.module').then(m => m.ProgrammingCalculatorModule) },
  { path: 'color-picker', loadChildren: () => import('./tools/color/color-picker/color-picker.module').then(m => m.ColorPickerModule) },
  { path: 'random-number', loadChildren: () => import('./tools/randomizer/random-number/random-number.module').then(m => m.RandomNumberModule) },
  { path: 'random-letter', loadChildren: () => import('./tools/randomizer/random-letter/random-letter.module').then(m => m.RandomLetterModule) },
  { path: 'random-character', loadChildren: () => import('./tools/randomizer/random-character/random-character.module').then(m => m.RandomCharacterModule) },
  { path: 'random-password', loadChildren: () => import('./tools/randomizer/random-password/random-password.module').then(m => m.RandomPasswordModule) },
  { path: 'random-item', loadChildren: () => import('./tools/randomizer/random-item/random-item.module').then(m => m.RandomItemModule) },
  { path: 'energy-convert', loadChildren: () => import('./tools/engineering/energy-convert/energy-convert.module').then(m => m.EnergyConvertModule) },
  { path: 'temperature-convert', loadChildren: () => import('./tools/engineering/temperature-convert/temperature-convert.module').then(m => m.TemperatureConvertModule) },
  { path: 'length-convert', loadChildren: () => import('./tools/engineering/length-convert/length-convert.module').then(m => m.LengthConvertModule) },
  { path: 'volume-convert', loadChildren: () => import('./tools/engineering/volume-convert/volume-convert.module').then(m => m.VolumeConvertModule) },
  { path: 'time-convert', loadChildren: () => import('./tools/engineering/time-convert/time-convert.module').then(m => m.TimeConvertModule) },
  { path: 'force-convert', loadChildren: () => import('./tools/engineering/force-convert/force-convert.module').then(m => m.ForceConvertModule) },
  { path: 'cryptocurrency-convert', loadChildren: () => import('./tools/financial/cryptocurrency-convert/cryptocurrency-convert.module').then(m => m.CryptocurrencyConvertModule) },
  { path: 'currency-convert', loadChildren: () => import('./tools/financial/currency-convert/currency-convert.module').then(m => m.CurrencyConvertModule) },
  { path: 'weight-and-mass-convert', loadChildren: () => import('./tools/engineering/weight-and-mass-convert/weight-and-mass-convert.module').then(m => m.WeightAndMassConvertModule) },
  { path: 'word-counter', loadChildren: () => import('./tools/writer/word-counter/word-counter.module').then(m => m.WordCounterModule) },
  { path: 'character-counter', loadChildren: () => import('./tools/writer/character-counter/character-counter.module').then(m => m.CharacterCounterModule) },
  { path: 'line-counter', loadChildren: () => import('./tools/writer/line-counter/line-counter.module').then(m => m.LineCounterModule) },
  { path: 'toollist', loadChildren: () => import('./toollist/toollist.module').then(m => m.ToollistModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'terms-of-use', loadChildren: () => import('./terms-of-use/terms-of-use.module').then(m => m.TermsOfUseModule) },
  { path: 'cookies-and-privacy-policy', loadChildren: () => import('./cookies-and-privacy-policy/cookies-and-privacy-policy.module').then(m => m.CookiesAndPrivacyPolicyModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: 'js-minifier', loadChildren: () => import('./tools/programming/js-minifier/js-minifier.module').then(m => m.JsMinifierModule) },
  { path: 'css-minifier', loadChildren: () => import('./tools/programming/css-minifier/css-minifier.module').then(m => m.CssMinifierModule) },
  { path: 'html-minifier', loadChildren: () => import('./tools/programming/html-minifier/html-minifier.module').then(m => m.HtmlMinifierModule) },
  { path: 'color-convert', loadChildren: () => import('./tools/color/color-convert/color-convert.module').then(m => m.ColorConvertModule) },
  { path: 'numeral-convert', loadChildren: () => import('./tools/programming/numeral-convert/numeral-convert.module').then(m => m.NumeralConvertModule) },
  { path: 'inflation-calculator', loadChildren: () => import('./tools/financial/inflation-calculator/inflation-calculator.module').then(m => m.InflationCalculatorModule) },
  { path: 'weight-and-mass-convert', loadChildren: () => import('./tools/engineering/weight-and-mass-convert/weight-and-mass-convert.module').then(m => m.WeightAndMassConvertModule) },
  { path: 'storage-convert', loadChildren: () => import('./tools/engineering/storage-convert/storage-convert.module').then(m => m.StorageConvertModule) },
  { path: 'pressure-convert', loadChildren: () => import('./tools/engineering/pressure-convert/pressure-convert.module').then(m => m.PressureConvertModule) },
  { path: 'power-convert', loadChildren: () => import('./tools/engineering/power-convert/power-convert.module').then(m => m.PowerConvertModule) },
  { path: 'area-convert', loadChildren: () => import('./tools/engineering/area-convert/area-convert.module').then(m => m.AreaConvertModule) },
  { path: 'base64-encoding', loadChildren: () => import('./tools/programming/base64-encoding/base64-encoding.module').then(m => m.Base64EncodingModule) },
  { path: 'base64-decoding', loadChildren: () => import('./tools/programming/base64-decoding/base64-decoding.module').then(m => m.Base64DecodingModule) },
  { path: 'uri-encoding', loadChildren: () => import('./tools/programming/uri-encoding/uri-encoding.module').then(m => m.UriEncodingModule) },
  { path: 'uri-decoding', loadChildren: () => import('./tools/programming/uri-decoding/uri-decoding.module').then(m => m.UriDecodingModule) },
  { path: 'ascii-encoding', loadChildren: () => import('./tools/programming/ascii-encoding/ascii-encoding.module').then(m => m.AsciiEncodingModule) },
  { path: 'ascii-decoding', loadChildren: () => import('./tools/programming/ascii-decoding/ascii-decoding.module').then(m => m.AsciiDecodingModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking'
    })
  ],
  exports: [FormsModule, RouterModule]
})
export class AppRoutingModule { }
