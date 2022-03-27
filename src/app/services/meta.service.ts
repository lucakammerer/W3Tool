import { BasicMetaTags } from './module/BasicMetaTags';
import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  public author = "W3Tools";
  public basicKeywords = ['online tools free', 'converter', 'calculators', 'color picker', 'generator'];

  title = "W3Tool - Free online Tools and Services"
  description = "W3Tool Online Tools » Up to 50 Tools available ✓ Easy to use ✓ For free ✓ 30 Tools every month ✓ Visit now!"

  constructor(
    private titleService: Title,
    private _meta: Meta
  ) { }

  public setBasicMetaTags(content: BasicMetaTags): void {
    this.titleService.setTitle(content.title ? content.title : this.title)
    this._meta.addTag({name: 'title', content: content.title});
    this._meta.addTag({name: 'description', content: content.description});
    this._meta.addTag({name: 'author', content: content.author ? content.author : this.author});
    this._meta.addTag({name: 'robots', content: content.robots ? content.robots : "INDEX, FOLLOW"});
    this._meta.addTag({name: 'keywords', content: content.keywords.concat(this.basicKeywords).join(',')});
  }
}
