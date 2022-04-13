import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-color-convert',
  templateUrl: './color-convert.component.html',
  styleUrls: ['./color-convert.component.sass']
})
export class ColorConvertComponent implements OnInit {

  @ViewChild('active')
  activeColor: ElementRef<HTMLDivElement>;

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

  units = ["HEX", "RGB", "CMYK", "HSV", "HSL", "LAB", "XYZ", "HWB", "Keyword"]
  unitsAsUri = ["hex", "rgb", "cmyk", "hsv", "hsl", "lab", "xyz", "hwb", "keyword"]
  unitExamples = ["e.g. #000000", "e.g. 0, 0, 0, 1", "e.g. 0, 0, 0, 100", "e.g. 44, 0, 0", "e.g. 0, 0, 0", "e.g. 0, 0, 0", "e.g. 0, 0, 0", "e.g. 0, 0, 100", "e.g. black"]
  currentExample = this.unitExamples[0];
  defaultValues = [this.units[0], this.units[1]]
  valueInRGB = [0, 0, 0];
  currentValue = "";
  result = "";
  rgbString = "";

  colors = {aliceblue:"240, 248, 255",
  antiquewhite:"250, 235, 215",
  aqua:"0, 255, 255",
  aquamarine:"127, 255, 212",
  azure:"1240, 255, 255",
  beige:"245, 245, 220",
  bisque:"255, 228, 196",
  black:"0, 0, 0",
  blanchedalmond:"255, 235, 205",
  blue:"0, 0, 255",
  blueviolet:"138,43,226",
  brown:"165,42,42",
  burlywood:"222,184,135",
  cadetblue:"95,158,160",
  chartreuse:"127,255,0",
  chocolate:"210,105,30",
  coral:"255,127,80",
  cornflowerblue:"100,149,237",
  cornsilk:"255,248,220",
  crimson:"220,20,60",
  cyan:"0,255,255",
  darkblue:"0,0,139",
  darkcyan:"0,139,139",
  darkgoldenrod:"184,134,11",
  darkgray:"169,169,169",
  darkgreen:"0,100,0",
  darkgrey: "169,169,169",
  darkkhaki:"189,183,107",
  darkmagenta:"139,0,139",
  darkolivegreen:"85,107,47",
  darkorange:"255,140,0",
  darkorchid:"153,50,204",
  darkred:"139,0,0",
  darksalmon:"233,150,122",
  darkseagreen:"143,188,143",
  darkslateblue:"72,61,139",
  darkslategray:"47,79,79",
  darkslategrey: "47,79,79",
  darkturquoise:"0,206,209",
  darkviolet:"148,0,211",
  deeppink:"255,20,147",
  deepskyblue:"0,191,255",
  dimgray:"105,105,105",
  dimgrey: "105,105,105",
  dodgerblue:"30,144,255",
  firebrick:"178,34,34",
  floralwhite:"255,250,240",
  forestgreen:"34,139,34",
  fuchsia:"255,0,255",
  gainsboro:"220,220,220",
  ghostwhite:"248,248,255",
  gold:"255,215,0",
  goldenrod:"218,165,32",
  gray:"128,128,128",
  green:"0,128,0",
  greenyellow:"173,255,47",
  grey: "128,128,128",
  honeydew:"240,255,240",
  hotpink:"255,105,180",
  indianred :"205,92,92",
  indigo:"75,0,130",
  ivory:"255,255,240",
  khaki:"240,230,140",
  lavender:"230,230,250",
  lavenderblush:"255,240,245",
  lawngreen:"124,252,0",
  lemonchiffon:"255,250,205",
  lightblue:"173,216,230",
  lightcoral:"240,128,128",
  lightcyan:"224,255,255",
  lightgoldenrodyellow:"250,250,210",
  lightgray:"211,211,211",
  lightgreen:"144,238,144",
  lightgrey: "211,211,211",
  lightpink:"255,182,193",
  lightsalmon:"255,160,122",
  lightseagreen:"32,178,170",
  lightskyblue:"135,206,250",
  lightslategray:"119,136,153",
  lightslategrey:"119,136,153",
  lightsteelblue:"176,196,222",
  lightyellow:"255,255,224",
  lime:"0,255,0",
  limegreen:"50,205,50",
  linen:"250,240,230",
  magenta:"255,0,255",
  maroon:"128,0,0",
  mediumaquamarine:"102,205,170",
  mediumblue:"0,0,205",
  mediumorchid:"186,85,211",
  mediumpurple:"147,112,219",
  mediumseagreen:"60,179,113",
  mediumslateblue:"123,104,238",
  mediumspringgreen:"0,250,154",
  mediumturquoise:"72,209,204",
  mediumvioletred:"199,21,133",
  midnightblue:"25,25,112",
  mintcream:"245,255,250",
  mistyrose:"255,228,225",
  moccasin:"255,228,181",
  navajowhite:"255,222,173",
  navy:"0,0,128",
  oldlace:"253,245,230",
  olive:"128,128,0",
  olivedrab:"107,142,35",
  orange:"255,165,0",
  orangered:"255,69,0",
  orchid:"218,112,214",
  palegoldenrod:"238,232,170",
  palegreen:"152,251,152",
  paleturquoise:"175,238,238",
  palevioletred:"219,112,147",
  papayawhip:"255,239,213",
  peachpuff:"255,218,185",
  peru:"205,133,63",
  pink:"255,192,203",
  plum:"221,160,221",
  powderblue:"176,224,230",
  purple:"128,0,128",
  red:"255,0,0",
  rosybrown:"188,143,143",
  royalblue:"65,105,225",
  saddlebrown:"139,69,19",
  salmon:"250,128,114",
  sandybrown:"244,164,96",
  seagreen:"46,139,87",
  seashell:"255,245,238",
  sienna:"160,82,45",
  silver:"192,192,192",
  skyblue:"135,206,235",
  slateblue:"106,90,205",
  slategray:"112,128,144",
  slategrey:"112,128,144",
  snow:"255,250,250",
  springgreen:"0,255,127",
  steelblue:"70,130,180",
  tan:"210,180,140",
  teal:"0,128,128",
  thistle:"216,191,216",
  tomato:"255,99,71",
  turquoise:"64,224,208",
  violet:"238,130,238",
  wheat:"245,222,179",
  white:"255,255,255",
  whitesmoke:"245,245,245",
  yellow:"255,255,0",
  yellowgreen:"154,205,50"
};

  constructor(
    public _metaTags: MetaService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    var routeUrl = this.route.snapshot.params['un'];

    routeUrl ? routeUrl = routeUrl.split("-") : routeUrl

    _metaTags.setBasicMetaTags({
      title: this.route.snapshot.params['un'] != null
        ? routeUrl[0].toUpperCase() + ' to ' + routeUrl[1].toUpperCase() + ' - Color Converter Tool'
        : 'Convert a Color - RGB, HEX, CMYK, HSV, HSL',
      date: new Date(),
      description: this.route.snapshot.params['un'] != null
        ? 'Convert' + routeUrl[0].toUpperCase() + ' to ' + routeUrl[1].toUpperCase() + '. Convert colors between RGB, HEX, CMYK, HSV, HSL, LAB, XYZ, HWB and Keyword formats. Color Converter is a free and fast tool for converting colors.'
        : 'Convert colors between RGB, HEX, CMYK, HSV, HSL, LAB, XYZ, HWB and Keyword formats. Color Converter is a free and fast tool for converting colors.',
      keywords: ["color converter", "color conversion tool", "free converter", "convert a color", "color unit converter", "color tool"]
    });
  }

  changeExample (){
    switch(this.defaultValues[0]) {
      case this.units[0]:
        this.currentExample = this.unitExamples[0]
        break;
      case this.units[1]:
        this.currentExample = this.unitExamples[1]
        break;
      case this.units[2]:
        this.currentExample = this.unitExamples[2]
        break;
      case this.units[3]:
        this.currentExample = this.unitExamples[3]
        break;
      case this.units[4]:
        this.currentExample = this.unitExamples[4]
        break;
      case this.units[5]:
        this.currentExample = this.unitExamples[5]
        break;
      case this.units[6]:
        this.currentExample = this.unitExamples[6]
        break;
      case this.units[7]:
        this.currentExample = this.unitExamples[7]
        break;
      case this.units[8]:
        this.currentExample = this.unitExamples[8]
        break;
    }
  }

  hexToRGB (val) {
    var res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(val);

    var r = parseInt(res[1], 16)
    var g = parseInt(res[2], 16)
    var b = parseInt(res[3], 16)

    return [r,g,b]
  }

  rgbToRGB (val) {
      var res = val.replace(/\s/g, "").split(",")
      return [res[0],res[1],res[2]]
  }

  cmykToRGB (val) {
    var res = val.replace(/\s/g, "").split(",")

    if(parseInt(res[0]) > 1 || parseInt(res[1]) > 1 || parseInt(res[2]) > 1 || parseInt(res[3]) > 1) {
      var c = parseInt(res[0]) / 100
      var m = parseInt(res[1]) / 100
      var y = parseInt(res[2]) / 100
      var k = parseInt(res[3]) / 100
    } else {
      var c = parseInt(res[0])
      var m = parseInt(res[1])
      var k = parseInt(res[2])
      var y = parseInt(res[3])
    }

    var r = 255 * (1 - c) * (1 - k);
    var g = 255 * (1 - m) * (1 - k);
    var b = 255 * (1 - y) * (1 - k);

    return [r, g, b]
  }

  hsvToRGB (val) {
    var res = val.replace(/\s/g, "").split(",")

    var r = 0, g = 0, b = 0;

    if(parseInt(res[0]) > 1 || parseInt(res[1]) > 1 || parseInt(res[2]) > 1) {
      var h = parseInt(res[0]) / 360
      var s = parseInt(res[1]) / 100
      var v = parseInt(res[2]) / 100
    } else {
      var h = parseInt(res[0])
      var s = parseInt(res[1])
      var v = parseInt(res[2])
    }

    var i = Math.floor(h * 6);
    var f = h * 6 - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);

    switch (i % 6) {
      case 0: r = v, g = t, b = p; break;
      case 1: r = q, g = v, b = p; break;
      case 2: r = p, g = v, b = t; break;
      case 3: r = p, g = q, b = v; break;
      case 4: r = t, g = p, b = v; break;
      case 5: r = v, g = p, b = q; break;
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
  }

  hslToRGB (val) {
    var res = val.replace(/\s/g, "").split(",")

    var r = 0, g = 0, b = 0;

    if(parseInt(res[0]) > 1 || parseInt(res[1]) > 1 || parseInt(res[2]) > 1) {
      var h = parseInt(res[0]) / 360
      var s = parseInt(res[1]) / 100
      var l = parseInt(res[2]) / 100
    } else {
      var h = parseInt(res[0])
      var s = parseInt(res[1])
      var l = parseInt(res[2])
    }

    if(s == 0){
        r = g = b = l;
    } else {
        var hue2rgb = function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }

  labToRGB (val) {

    var res = val.replace(/\s/g, "").split(",")

    var r = 0, g = 0, b = 0;

    var l = parseInt(res[0])
    var a = parseInt(res[1])
    var b = parseInt(res[2])

    var y = (l + 16) / 116,
      x = a / 500 + y,
      z = y - b / 200,

    x = 0.95047 * ((x * x * x > 0.008856) ? x * x * x : (x - 16/116) / 7.787);
    y = 1.00000 * ((y * y * y > 0.008856) ? y * y * y : (y - 16/116) / 7.787);
    z = 1.08883 * ((z * z * z > 0.008856) ? z * z * z : (z - 16/116) / 7.787);

    r = x *  3.2406 + y * -1.5372 + z * -0.4986;
    g = x * -0.9689 + y *  1.8758 + z *  0.0415;
    b = x *  0.0557 + y * -0.2040 + z *  1.0570;

    r = (r > 0.0031308) ? (1.055 * Math.pow(r, 1/2.4) - 0.055) : 12.92 * r;
    g = (g > 0.0031308) ? (1.055 * Math.pow(g, 1/2.4) - 0.055) : 12.92 * g;
    b = (b > 0.0031308) ? (1.055 * Math.pow(b, 1/2.4) - 0.055) : 12.92 * b;

    return [Math.max(0, Math.min(1, r)) * 255,
            Math.max(0, Math.min(1, g)) * 255,
            Math.max(0, Math.min(1, b)) * 255]
  }

  xyzToRGB (val) {
    var res = val.replace(/\s/g, "").split(",")

    var rgb = [0, 0, 0];

    var X = parseInt(res[0]) / 100
    var Y = parseInt(res[1]) / 100
    var Z = parseInt(res[2]) / 100

    rgb[0] =  (3.2404542*X) + (-1.5371385*Y) + (-0.4985314*Z)
    rgb[1] = (-0.9692660*X) + (1.8760108*Y) + (0.0415560*Z)
    rgb[2] =  (0.0556434*X) + (0.2040259*Y) + (1.0572252*Z)

    for (var i = 0; i < 3; i++)
    {
        if (rgb[i] > 0.0031308)
        {
            rgb[i] = (1.055 * Math.pow(rgb[i], (1.0 / 2.4))) - .055;
        }
        else
        {
            rgb[i] = rgb[i] * 12.92;
        }
    }

    rgb[0] = rgb[0] * 255.0;
    rgb[1] = rgb[1] * 255.0;
    rgb[2] = rgb[2] * 255.0

    return [rgb[0], rgb[1], rgb[2]]

  }

  hwbToRGB(val) {
    var res = val.replace(/\s/g, "").split(",")

    var r = 0, g = 0, b = 0;

    if(parseInt(res[0]) > 1 || parseInt(res[1]) > 1 || parseInt(res[2]) > 1) {
      var h = parseInt(res[0]) / 360
      var w = parseInt(res[1]) / 100
      var b = parseInt(res[2]) / 100
    } else {
      var h = parseInt(res[0])
      var w = parseInt(res[1])
      var b = parseInt(res[2])
    }

    h *= 6;

    var v = 1 - b, n, f = 0, i = 0;
    if (!h) {
      r = v, g = v, b = v
    }
    i = h|0;
    f = h - i;
    if (i & 1) f = 1 - f;
    n = w + f * (v - w);
    v = (v * 255)|0;
    n = (n * 255)|0;
    w = (w * 255)|0;

    switch(i) {
      case 6:
      case 0: r = v, g = n, b = w; break;
      case 1: r = n, g = v, b = w; break;
      case 2: r = w, g = v, b = n; break;
      case 3: r = w, g = n, b = v; break;
      case 4: r = n, g = v, b =w, b = v; break;
      case 5: r = v, g = w, b = n; break;
    }

    return [r, g, b]
  }

  keywordToRGB (val) {
    return (this.colors[val.toString().replace(/\s/g, '')]).replace(/\s/g, "").split(",");
  }

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

  rgbToHSL (val) {
    var r = val[0] / 255;
    var g = val[1] / 255;
    var b = val[2] / 255;

    var max = (r > g && r > b) ? r : (g > b) ? g : b;
    var min = (r < g && r < b) ? r : (g < b) ? g : b;

    var hVar = 0, sVar = 0, lVar = 0;
    lVar = (max + min) / 2.0;

    if (max == min) {
        hVar = sVar = 0.0;
    } else {
        var d = max - min;
        sVar = (lVar > 0.5) ? d / (2.0 - max - min) : d / (max + min);

        if (r > g && r > b)
            hVar = (g - b) / d + (g < b ? 6.0 : 0.0);

        else if (g > b)
            hVar = (b - r) / d + 2.0;

        else
            hVar = (r - g) / d + 4.0;

        hVar /= 6.0;
    }

    return Math.round(hVar * 360 * 10) / 10 + "," + Math.round(sVar * 100 * 10) / 10 + "," + Math.round(lVar * 100 * 10) / 10

  }

  rgbToLAB (val) {
    var xyz = this.rgbToXYZ([val[0], val[1], val[2]]).replace(/\s/g, '').replace(/\s/g, "").split(",");

    var x = xyz[0];
    var y = xyz[1];
    var z = xyz[2];

    var ref_X =  95.047;
    var ref_Y = 100.000;
    var ref_Z = 108.883;

    var var_X = parseInt(x) / ref_X
    var var_Y = parseInt(y) / ref_Y
    var var_Z = parseInt(z) / ref_Z

    if ( var_X > 0.008856 ) var_X = Math.pow(var_X, ( 1/3 ))
    else                    var_X = ( 7.787 * var_X ) + ( 16 / 116 )
    if ( var_Y > 0.008856 ) var_Y = Math.pow(var_Y, ( 1/3 ))
    else                    var_Y = ( 7.787 * var_Y ) + ( 16 / 116 )
    if ( var_Z > 0.008856 ) var_Z = Math.pow(var_Z, ( 1/3 ))
    else                    var_Z = ( 7.787 * var_Z ) + ( 16 / 116 )

    var CIE_L = ( 116 * var_Y ) - 16
    var CIE_a = 500 * ( var_X - var_Y )
    var CIE_b = 200 * ( var_Y - var_Z )

    return CIE_L + "," + CIE_a + "," + CIE_b
  }

  rgbToXYZ (val) {

    var R = val[0], G = val[1], B = val[2];

    var var_R = parseFloat( (R / 255).toString() )        //R from 0 to 255
    var var_G = parseFloat( (G / 255).toString() )        //G from 0 to 255
    var var_B = parseFloat( (B / 255).toString() )        //B from 0 to 255

    if ( var_R > 0.04045 ) Math.pow(var_R = ( ( var_R + 0.055 ) / 1.055 ), 2.4)
    else                   var_R = var_R / 12.92
    if ( var_G > 0.04045 ) Math.pow(var_G = ( ( var_G + 0.055 ) / 1.055 ), 2.4)
    else                   var_G = var_G / 12.92
    if ( var_B > 0.04045 ) Math.pow(var_B = ( ( var_B + 0.055 ) / 1.055 ), 2.4)
    else                   var_B = var_B / 12.92

    var_R = var_R * 100
    var_G = var_G * 100
    var_B = var_B * 100

    //Observer. = 2°, Illuminant = D65
    var X = var_R * 0.4124 + var_G * 0.3576 + var_B * 0.1805
    var Y = var_R * 0.2126 + var_G * 0.7152 + var_B * 0.0722
    var Z = var_R * 0.0193 + var_G * 0.1192 + var_B * 0.9505

    return X + "," + Y + "," + Z
  }


  rgbToHWB(val) {

    var r = val[0], g = val[1], b = val[2]

    var f, i,
        w = Math.min(r, g, b),
        v = Math.max(r, g, b),
        black = 1 - v;

    if (v === w) return 0 + "," + w + "," + black;
    f = r === w ? g - b : (g === w ? b - r : r - g);
    i = r === w ? 3 : (g === w ? 5 : 1);
      return (i - f / (v - w)) / 6  + "," +  w  + "," +  black
  }

  rgbToKeyword (val) {
    return Object.keys(this.colors).find(key => this.colors[key] == val[0] + "," + val[1] + "," + val[2])
  }

  convert (){

    this.currentValue = this.form.value.value.inputValue

    switch(this.form.value.selection.inputSelection){
      case this.units[0]:
        this.valueInRGB = this.hexToRGB(this.currentValue);
        break;
      case this.units[1]:
        this.valueInRGB = this.rgbToRGB(this.currentValue);
        break;
      case this.units[2]:
        this.valueInRGB = this.cmykToRGB(this.currentValue);
        break;
      case this.units[3]:
        this.valueInRGB = this.hsvToRGB(this.currentValue);
        break;
      case this.units[4]:
        this.valueInRGB = this.hslToRGB(this.currentValue);
        break;
      case this.units[5]:
        this.valueInRGB = this.labToRGB(this.currentValue);
        break;
      case this.units[6]:
        this.valueInRGB = this.xyzToRGB(this.currentValue);
        break;
      case this.units[7]:
        this.valueInRGB = this.hwbToRGB(this.currentValue);
        break;
      case this.units[8]:
        this.valueInRGB = this.keywordToRGB(this.currentValue);
        break;
    }

    this.valueInRGB[0] = Math.round(this.valueInRGB[0])
    this.valueInRGB[1] = Math.round(this.valueInRGB[1])
    this.valueInRGB[2] = Math.round(this.valueInRGB[2])
    this.rgbString = Math.round(this.valueInRGB[0]) + ", " + Math.round(this.valueInRGB[1]) + ", " + Math.round(this.valueInRGB[2]);

    // "HEX", "RGB", "CMYK", "HSV", "HSL", "LAB", "XYZ", "HWB", "Keyword"

    switch(this.form.value.selection.outputSelection){
      case this.units[0]:
        this.result = this.rgbToHex(this.valueInRGB);
        break;
      case this.units[1]:
        this.result = this.rgbString
        break;
      case this.units[2]:
        this.result = this.rgbToCMYK(this.valueInRGB);
        break;
      case this.units[3]:
        this.result = this.rgbToHSV(this.valueInRGB);
        break;
      case this.units[4]:
        this.result = this.rgbToHSL(this.valueInRGB);
        break;
      case this.units[5]:
        this.result = this.rgbToLAB(this.valueInRGB);
        break;
      case this.units[6]:
        this.result = this.rgbToXYZ(this.valueInRGB);
        break;
      case this.units[7]:
        this.result = this.rgbToHWB(this.valueInRGB);
        break;
      case this.units[8]:
        this.result = this.rgbToKeyword(this.valueInRGB);
        break;
    }

    this.activeColor.nativeElement.style.backgroundColor = "rgb(" + this.rgbString + ")";
  }

  ngOnInit() {

    var routes = this.route.snapshot.params['un'];

    if (routes != null) {
      routes = routes.split("-")

      if (this.unitsAsUri.includes(routes[0].toLowerCase()) && this.unitsAsUri.includes(routes[1].toLowerCase())) {
        this.defaultValues[0] = this.units[this.unitsAsUri.indexOf(routes[0].toLowerCase())]
        this.defaultValues[1] = this.units[this.unitsAsUri.indexOf(routes[1].toLowerCase())]
      }
    }
  }

}
