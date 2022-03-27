import { Component, OnInit, Input, ViewChild, ViewChildren, ElementRef, HostListener, AfterViewInit, QueryList} from '@angular/core';
import { Router } from '@angular/router';
import { tools } from '../global';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  // search
  @ViewChild('input')
  searchInput: ElementRef<HTMLInputElement>;
  @ViewChildren("listItem")
  listItems!: QueryList<any>;

  // scroll to active
  @ViewChild('active')
  activeItem: ElementRef<HTMLDivElement>;

  items = tools;
  search: any;
  text: string;
  found: any;

  @Input()
  isVisible: boolean = true;
  screenWidth = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
     this.screenWidth = window.innerWidth;
  }

  constructor(public router: Router) {
    this.onResize()
  }

  public sidebarSwitch(event) {
    var sidebar = document.getElementById("sidebar");
    var sidebarBtn = document.getElementById("sidebar-button");

    if(sidebar.style.display == 'block') {
      sidebar.style.display = 'none';
      sidebarBtn.style.position = 'fixed';
      sidebarBtn.style.left = '20px'
    } else {
      sidebar.style.display = 'block';
      sidebarBtn.style.position = 'fixed';
      sidebarBtn.style.left = '256px'
    }
  }

  ngOnInit(): void {
    // screen resolution
    if(this.screenWidth < 800){
      this.isVisible = false;
    }
  }

  ngAfterViewInit() {
    // search
    this.searchInput.nativeElement.addEventListener("input", this.filter.bind(this));
    // scroll to active
    if(this.activeItem != null){
      this.activeItem.nativeElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  filter(event){
    // search
    this.search = this.searchInput.nativeElement.value.toLowerCase();
    this.listItems.forEach(li => {
      this.text = li.nativeElement.innerHTML.toLowerCase();
      this.found = this.text.indexOf(this.search);

      if(this.search == ""){
        li.nativeElement.style.display = "block";
      } else if(this.found == -1) {
        li.nativeElement.style.display = "none";
      } else {
        li.nativeElement.style.display = "block";
      }
    })
  }
}





/**
 *
 * TODO:
 *
 * Terms of use, cookies, etc bar
 *
 *
 *
 */
