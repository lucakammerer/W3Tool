import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.sass']
})
export class ColorPickerComponent {
  public hue: string
  public color: string[]
}
