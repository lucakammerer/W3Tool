import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppearanceService {

  @Input()
  isLightMode:boolean;

  constructor() { }

  public setCookie(name: string, val: boolean) {

    const date = new Date();
    const value = val;

    document.cookie = name+"="+value+"; path=/";

    window.location.reload();
  }

  public getCookie(name: string) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");

    if (parts.length == 2) {
      return parts.pop().split(";").shift();
    }
    return null;
  }

}
