import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.sass']
})
export class ColorPickerComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas')
  canvas: ElementRef<HTMLCanvasElement>;
  private context: CanvasRenderingContext2D;
  color = 'rgb(255, 255, 255)';
  hex = '#ffffff'
  hsv = '4°, 0%, 100%'

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'Color Picker - W3Tool',
      date: new Date(),
      description: 'Color Picker is a free online tool for picking a color and get the most common color formats',
      keywords: ["online tools", "converter", "calculator", "random generator", "color picker", "word counter"]
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.context = this.canvas.nativeElement.getContext('2d');
    this.context.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height)

    const grad = this.context.createLinearGradient(0, 0, 0, this.canvas.nativeElement.height)
    grad.addColorStop(0, 'rgb(255, 0, 0)');
    grad.addColorStop(0.17, 'rgb(255, 255, 0)');
    grad.addColorStop(0.33, 'rgb(0, 255, 0)');
    grad.addColorStop(0.52, 'rgb(0, 255, 255)');
    grad.addColorStop(0.66, 'rgb(0, 0, 255)');
    grad.addColorStop(0.85, 'rgb(255, 0, 255)');
    grad.addColorStop(1, 'rgb(255, 0, 0)');

    this.context.beginPath();
    this.context.rect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height)
    this.context.fillStyle = grad;
    this.context.fill();
    this.context.closePath();
  }

  onMouseDown(evt: MouseEvent){
    const image = this.context.getImageData(0, evt.offsetY, 1, 1).data;
    this.color = "rgb(" + image[0] + ',' + image[1] + ',' + image[2] + ")"
    this.hex = '#' + image[0].toString(16) + image[1].toString(16) + image[2].toString(16)

    let rabs, gabs, babs, rr, gg, bb, h, s, v, diff, diffc, percentRoundFn;
    rabs = image[0] / 255;
    gabs = image[1] / 255;
    babs = image[2] / 255;
    v = Math.max(rabs, gabs, babs),
    diff = v - Math.min(rabs, gabs, babs);
    diffc = c => (v - c) / 6 / diff + 1 / 2;
    percentRoundFn = num => Math.round(num * 100) / 100;
    if (diff == 0) {
        h = s = 0;
    } else {
        s = diff / v;
        rr = diffc(rabs);
        gg = diffc(gabs);
        bb = diffc(babs);

        if (rabs === v) {
            h = bb - gg;
        } else if (gabs === v) {
            h = (1 / 3) + rr - bb;
        } else if (babs === v) {
            h = (2 / 3) + gg - rr;
        }
        if (h < 0) {
            h += 1;
        }else if (h > 1) {
            h -= 1;
        }
    }

    this.hsv = Math.round(h * 360) + '°, ' + percentRoundFn(s * 100) + '%, ' + percentRoundFn(v * 100) + '%'
  }
}
