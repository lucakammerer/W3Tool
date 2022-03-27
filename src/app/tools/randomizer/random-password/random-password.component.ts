import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-random-password',
  templateUrl: './random-password.component.html',
  styleUrls: ['./random-password.component.sass']
})
export class RandomPasswordComponent implements OnInit {

  form = new FormGroup({
    length: new FormControl(),
    characters: new FormControl(),
    numbers: new FormControl(),
    lowercase: new FormControl(),
    uppercase: new FormControl(),
  });

  defaultLength = 12
  defaultCharacters = true
  defaultNumbers = true
  defaultLowercase = true
  defaultUppercase = true
  result = ''

  constructor(
    public _metaTags: MetaService
  ) {
    _metaTags.setBasicMetaTags({
      title: 'Random Password - W3Tool',
      date: new Date(),
      description: 'Random password is a free online tool for generating secure passwords',
      keywords: ["online tools", "converter", "calculator", "random generator", "color picker", "word counter"]
    });
  }

  generate() {
    if(this.form.value.length <= 512){
      var charset = ""
      if(this.form.value.characters == true){
        charset += "~`!@#$%^&*()-_+={}[]|\\/:;\"'<>,.?"
      }
      if(this.form.value.numbers == true){
        charset += "1234567890"
      }
      if(this.form.value.lowercase == true){
        charset += "abcdefghijklmnopqrstuvwxyz"
      }
      if(this.form.value.uppercase == true){
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      }
      this.form.value.character == true
      this.result = "";
      for (var i = 0, n = charset.length; i < this.form.value.length; ++i) {
        this.result += charset.charAt(Math.floor(Math.random() * n));
      }
    }
  }

  copy() {
    navigator.clipboard.writeText(this.result);

    alert("Copied to clipboard")
  }

  ngOnInit(): void {
  }

}
