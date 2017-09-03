import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  private hideArrow = false;

  constructor() { }

  ngOnInit() { }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset > 50) {
      this.hideArrow = true;
    } else {
      this.hideArrow = false;
    }
  }

}
