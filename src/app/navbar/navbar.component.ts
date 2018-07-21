import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menus = [
    {
      name: "Home",
      link: "#"
    },
    {
      name: "Google",
      link: "http://google.co.th"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
