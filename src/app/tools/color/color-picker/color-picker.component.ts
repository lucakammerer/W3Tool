import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.sass']
})
export class ColorPickerComponent {

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'Color Picker Tool - HEX and RGB Color Picker for HTML',
      date: new Date(),
      description: 'Use the Color Picker to select a color from a gradient and get values as RGB, HEX, CMYK and HSV.',
      keywords: ["color picker", "color picker tool", "free picker", "pick a color", "color unit picker", "color tool"]
    });
  }

  public hue: string
  public color: string[]
}
