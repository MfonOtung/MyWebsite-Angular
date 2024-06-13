import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  getHeaders(){
    return  [
      {
        name: "Home", 
        href: "#header",
        className: "active"
      },
      {
        name: "About Me", 
        href: "#aboutme",
        className: ""
      },
      {
        name: "Experience", 
        href: "#experience",
        className: ""
      },
      {
        name: "My Skills", 
        href: "#myskills",
        className: ""
      },
      {
        name: "Portfolio", 
        href: "#portfolio",
        className: ""
      },
      {
        name: "Contact", 
        href: "#contact",
        className: ""
      },
      
    ]
  }
}
