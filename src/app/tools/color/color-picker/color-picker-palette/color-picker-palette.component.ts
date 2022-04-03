import { Component, AfterViewInit, Input, Output, EventEmitter, ElementRef, ViewChild, HostListener, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-color-picker-palette',
  templateUrl: './color-picker-palette.component.html',
  styleUrls: ['./color-picker-palette.component.sass']
})
export class ColorPickerPaletteComponent implements AfterViewInit {
  @Input()
  hue: string

  @Output()
  color: EventEmitter<Array<string>> = new EventEmitter(true)

  @ViewChild('canvas')
  canvas: ElementRef<HTMLCanvasElement>

  private ctx: CanvasRenderingContext2D

  private mousedown: boolean = false

  public selectedPosition: { x: number; y: number }

  ngAfterViewInit() {
    this.draw()
  }

  draw() {
    if (!this.ctx) {
      this.ctx = this.canvas.nativeElement.getContext('2d')
    }
    const width = this.canvas.nativeElement.width
    const height = this.canvas.nativeElement.height

    this.ctx.fillStyle = this.hue || 'rgba(255,255,255,1)'
    this.ctx.fillRect(0, 0, width, height)

    const whiteGrad = this.ctx.createLinearGradient(0, 0, width, 0)
    whiteGrad.addColorStop(0, 'rgba(255,255,255,1)')
    whiteGrad.addColorStop(1, 'rgba(255,255,255,0)')

    this.ctx.fillStyle = whiteGrad
    this.ctx.fillRect(0, 0, width, height)

    const blackGrad = this.ctx.createLinearGradient(0, 0, 0, height)
    blackGrad.addColorStop(0, 'rgba(0,0,0,0)')
    blackGrad.addColorStop(1, 'rgba(0,0,0,1)')

    this.ctx.fillStyle = blackGrad
    this.ctx.fillRect(0, 0, width, height)

    if (this.selectedPosition) {
      this.ctx.strokeStyle = 'white'
      this.ctx.fillStyle = 'white'
      this.ctx.beginPath()
      this.ctx.arc(
        this.selectedPosition.x,
        this.selectedPosition.y,
        10,
        0,
        2 * Math.PI
      )
      this.ctx.lineWidth = 5
      this.ctx.stroke()
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['hue']) {
      this.draw()
      const pos = this.selectedPosition
      if (pos) {
        const rgbColor = this.getColorAtPosition(pos.x, pos.y)
        this.color.emit([
          rgbColor[0] + "," + rgbColor[1] + "," + rgbColor[2],
          this.rgbToHex(rgbColor),
          this.rgbToCMYK(rgbColor),
          this.rgbToHSV(rgbColor)
        ])
      }
    }
  }

  @HostListener('window:mouseup', ['$event'])
  onMouseUp(evt: MouseEvent) {
    this.mousedown = false
  }

  onMouseDown(evt: MouseEvent) {
    this.mousedown = true
    this.selectedPosition = { x: evt.offsetX, y: evt.offsetY }
    this.draw()
    const rgbColor = this.getColorAtPosition(evt.offsetX, evt.offsetY)
    this.color.emit([
      rgbColor[0] + "," + rgbColor[1] + "," + rgbColor[2],
      this.rgbToHex(rgbColor),
      this.rgbToCMYK(rgbColor),
      this.rgbToHSV(rgbColor)
    ])
  }

  onMouseMove(evt: MouseEvent) {
    if (this.mousedown) {
      this.selectedPosition = { x: evt.offsetX, y: evt.offsetY }
      this.draw()
      this.emitColor(evt.offsetX, evt.offsetY)
    }
  }

  emitColor(x: number, y: number) {
    const rgbColor = this.getColorAtPosition(x, y)
    this.color.emit([
      rgbColor[0] + "," + rgbColor[1] + "," + rgbColor[2],
      this.rgbToHex(rgbColor),
      this.rgbToCMYK(rgbColor),
      this.rgbToHSV(rgbColor)
    ])
  }

  getColorAtPosition(x: number, y: number) {
    const imageData = this.ctx.getImageData(x, y, 1, 1).data
    const rgb = [imageData[0], imageData[1], imageData[2]]
    return rgb
  }

  // color converter

  rgbToHex (val) {
    var r = val[0].toString(16);
    r = r.length == 1 ? "0" + r : r;

    var g = val[1].toString(16);
    g = g.length == 1 ? "0" + g: g;

    var b = val[2].toString(16);
    b = b.length == 1 ? "0" + b : b;

    return "#" + r + g + b;
  }

  rgbToCMYK (val) {
    var c = 1 - (val[0] / 255);
    var m = 1 - (val[1] / 255);
    var y = 1 - (val[2] / 255);
    var k = Math.min(c, Math.min(m, y));

    c = (c - k) / (1 - k);
    m = (m - k) / (1 - k);
    y = (y - k) / (1 - k);

    c = Math.round(c * 10000) / 100;
    m = Math.round(m * 10000) / 100;
    y = Math.round(y * 10000) / 100;
    k = Math.round(k * 10000) / 100;

    c = isNaN(c) ? 0 : c;
    m = isNaN(m) ? 0 : m;
    y = isNaN(y) ? 0 : y;
    k = isNaN(k) ? 0 : k;

    return c + "," + m + "," + y + "," + k
  }

  rgbToHSV (val) {
    let rabs, gabs, babs, rr, gg, bb, h, s, v, diff, diffc, percentRoundFn;
    rabs = val[0] / 255;
    gabs = val[1] / 255;
    babs = val[2] / 255;
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

    return Math.round(h * 360) + "," + Math.round(s * 100) + "," + Math.round(v * 100)

  }

}
