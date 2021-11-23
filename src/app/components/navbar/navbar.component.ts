import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showNav = true;
  otherScroll = window.pageYOffset;

  x = fromEvent(document, 'scroll');

  constructor() {
    this.x.subscribe((res: any) => {
      console.log(res);
      const scroll = res.target.documentElement.scrollTop;
      console.log(scroll);

      if(scroll > 100){
        this.showNav = false;
      }
      if(scroll < this.otherScroll){
        this.showNav = true;
      }
      this.otherScroll = scroll;
    });
  }

  ngOnInit(): void {
  }

}
