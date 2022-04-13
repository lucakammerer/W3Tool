import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-power-convert',
  templateUrl: './power-convert.component.html',
  styleUrls: ['./power-convert.component.sass']
})
export class PowerConvertComponent implements OnInit {

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

  units = ["watt [W]", "exawatt [EW]","petawatt [PW]","terawatt [TW]","gigawatt [GW]","megawatt [MW]","kilowatt [kW]","hectowatt [hW]","dekawatt [daW]","deciwatt [dW]","centiwatt [cW]","milliwatt [mW]","microwatt [µW]","nanowatt [nW]","picowatt [pW]","femtowatt [fW]","attowatt [aW]","horsepower [hp, hp (UK)]","horsepower (550 ft*lbf/s)","horsepower (metric)","horsepower (boiler)","horsepower (electric)","horsepower (water)","pferdestärke (ps)","Btu (IT)/hour [Btu/h]","Btu (IT)/minute [Btu/min]","Btu (IT)/second [Btu/s]","Btu (th)/hour [Btu (th)/h]","Btu [Btu (th)/minute]","Btu (th)second [Btu (th)/s]", "ton (refrigeration)"]
  unitsAsUri = ["watt", "exawatt", "petawatt", "terawatt", "gigawatt", "megawatt", "kilowatt", "hectowatt", "dekawatt", "deciwatt", "centiwatt", "milliwatt", "microwatt", "nanowatt", "picowatt", "femtowatt", "attowatt", "horsepower (UK)", "horsepower (550 ft*lbf/s)", "horsepower (metric)", "horsepower (boiler)", "horsepower (electric)", "horsepower (water)", "pferdestaerke", "btu hour", "btu minute", "btu second", "btu hour [th/h]", "btu minute [th/minute]", "btu second [th/s]", "ton [refrigeration]"]
  defaultValues = [this.units[0], this.units[1]]
  valueInWatt = 0;
  currentValue = 0;
  result = "";

  constructor(
    public _metaTags: MetaService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    var routeUrl = this.route.snapshot.params['un'];
    routeUrl ? routeUrl = routeUrl.split("-") : routeUrl

    _metaTags.setBasicMetaTags({
      title: this.route.snapshot.params['un'] != null
        ? routeUrl[0].toUpperCase() + ' to ' + routeUrl[1].toUpperCase() + ' - Power Converter'
        : 'Power Converter',
      date: new Date(),
      description: this.route.snapshot.params['un'] != null
        ? 'Convert' + routeUrl[0].toUpperCase() + ' to ' + routeUrl[1].toUpperCase() + '. Power Unit Converter tool is a free tool for converting Watt, Exawatt, Petawatt, Terawatt and more units.'
        : 'Power Unit Converter tool is a free tool for converting Watt, Exawatt, Petawatt, Terawatt and more units.',
      keywords: ["power unit converter", "free converter", "power converter", "power conversion tool", "conversion tool", "online tool"]
    });
  }

  convert (){
    this.currentValue = this.form.value.value.inputValue

    switch(this.form.value.selection.inputSelection){
      case this.units[0]:
        this.valueInWatt = this.currentValue
        break;
      case this.units[1]:
        this.valueInWatt = this.currentValue * 1000000000000000000
        break;
      case this.units[2]:
        this.valueInWatt = this.currentValue * 1000000000000000
        break;
      case this.units[3]:
        this.valueInWatt = this.currentValue * 1000000000000
        break;
      case this.units[4]:
        this.valueInWatt = this.currentValue * 1000000000
        break;
      case this.units[5]:
        this.valueInWatt = this.currentValue  * 1000000
        break;
      case this.units[6]:
        this.valueInWatt = this.currentValue * 1000
        break;
      case this.units[7]:
        this.valueInWatt = this.currentValue * 100
        break;
      case this.units[8]:
        this.valueInWatt = this.currentValue * 10
        break;
      case this.units[9]:
        this.valueInWatt = this.currentValue * 0.1
        break;
      case this.units[10]:
        this.valueInWatt = this.currentValue * 0.01
        break;
      case this.units[11]:
        this.valueInWatt = this.currentValue * 0.001
        break;
      case this.units[12]:
        this.valueInWatt = this.currentValue * 0.000001
        break;
      case this.units[13]:
        this.valueInWatt = this.currentValue * 1.E-9
        break;
      case this.units[14]:
        this.valueInWatt = this.currentValue * 1.E-12
        break;
      case this.units[15]:
        this.valueInWatt = this.currentValue * 1.E-15
        break;
      case this.units[16]:
        this.valueInWatt = this.currentValue * 9.999999999E-19
        break;
      case this.units[17]:
        this.valueInWatt = this.currentValue * 745.69987158
        break;
      case this.units[18]:
        this.valueInWatt = this.currentValue * 745.69987158
        break
      case this.units[19]:
        this.valueInWatt = this.currentValue * 735.49875
        break;
      case this.units[20]:
        this.valueInWatt = this.currentValue * 9809.5
        break;
      case this.units[21]:
        this.valueInWatt = this.currentValue * 746
        break;
      case this.units[22]:
        this.valueInWatt = this.currentValue * 746.043
        break;
      case this.units[23]:
        this.valueInWatt = this.currentValue * 735.49875
        break;
      case this.units[24]:
        this.valueInWatt = this.currentValue * 0.2930710702
        break;
      case this.units[25]:
        this.valueInWatt = this.currentValue * 17.58426421
        break;
      case this.units[26]:
        this.valueInWatt = this.currentValue * 1055.0558526
        break
      case this.units[27]:
        this.valueInWatt = this.currentValue * 0.292875
        break;
      case this.units[28]:
        this.valueInWatt = this.currentValue * 17.5725
        break;
      case this.units[29]:
        this.valueInWatt = this.currentValue * 1054.35
        break;
      case this.units[30]:
        this.valueInWatt = this.currentValue * 3516.8528421
        break;
    }
    switch(this.form.value.selection.outputSelection){
      case this.units[0]:
        this.result = this.valueInWatt.toString()
        break;
      case this.units[1]:
        this.result = (this.valueInWatt / 1000000000000000000).toString()
        break;
      case this.units[2]:
        this.result = (this.valueInWatt / 1000000000000000).toString()
        break;
      case this.units[3]:
        this.result = (this.valueInWatt / 1000000000000).toString()
        break;
      case this.units[4]:
        this.result = (this.valueInWatt / 1000000000).toString()
        break;
      case this.units[5]:
        this.result = (this.valueInWatt / 1000000).toString()
        break;
      case this.units[6]:
        this.result = (this.valueInWatt / 1000).toString()
        break;
      case this.units[7]:
        this.result = (this.valueInWatt / 100).toString()
        break;
      case this.units[8]:
        this.result = (this.valueInWatt / 10).toString()
        break;
      case this.units[9]:
        this.result = (this.valueInWatt / 0.1).toString()
        break;
      case this.units[10]:
        this.result = (this.valueInWatt / 0.01).toString()
        break;
      case this.units[11]:
        this.result = (this.valueInWatt / 0.001).toString()
        break;
      case this.units[12]:
        this.result = (this.valueInWatt / 0.000001).toString()
        break;
      case this.units[13]:
        this.result = (this.valueInWatt / 1.E-9).toString()
        break;
      case this.units[14]:
        this.result = (this.valueInWatt / 1.E-12).toString()
        break;
      case this.units[15]:
        this.result = (this.valueInWatt / 1.E-15).toString()
        break;
      case this.units[16]:
        this.result = (this.valueInWatt / 9.999999999E-19).toString()
        break;
      case this.units[17]:
        this.result = (this.valueInWatt / 745.69987158).toString()
        break;
      case this.units[18]:
        this.result = (this.valueInWatt / 745.69987158).toString()
        break;
      case this.units[19]:
        this.result = (this.valueInWatt / 735.49875).toString()
        break;
      case this.units[20]:
        this.result = (this.valueInWatt / 9809.5).toString()
        break;
      case this.units[21]:
        this.result = (this.valueInWatt / 746).toString()
        break;
      case this.units[22]:
        this.result = (this.valueInWatt / 746.043).toString()
        break;
      case this.units[23]:
        this.result = (this.valueInWatt / 735.49875).toString()
        break;
      case this.units[24]:
        this.result = (this.valueInWatt / 0.2930710702).toString()
        break;
      case this.units[25]:
        this.result = (this.valueInWatt / 17.58426421).toString()
        break;
      case this.units[26]:
        this.result = (this.valueInWatt / 1055.0558526).toString()
        break;
      case this.units[27]:
        this.result = (this.valueInWatt / 0.292875).toString()
        break;
      case this.units[28]:
        this.result = (this.valueInWatt / 17.5725).toString()
        break;
      case this.units[29]:
        this.result = (this.valueInWatt / 1054.35).toString()
        break;
      case this.units[30]:
        this.result = (this.valueInWatt / 3516.8528421).toString()
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
  }

}
