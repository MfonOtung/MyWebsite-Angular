import { Component } from '@angular/core';

@Component({
  selector: 'mfon-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  headerTitles = [
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
