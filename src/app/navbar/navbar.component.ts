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
      link: "/"
    },
    {
      name: "About",
      link: "/about"
    },
    {
      name: "Drop down",
      id: "xxx",
      link: "http://google.co.th",
      menus: [{
        name: "Action",
        link: "#"
      },{
        name: "Another action",
        link: "#"
      }]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
