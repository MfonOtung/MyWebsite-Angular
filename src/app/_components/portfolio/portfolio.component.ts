import { Component } from '@angular/core';

@Component({
  selector: 'mfon-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  myPortfolio = [
    {
      categoryName: "All", 
      dataFilter: "*",
      className: "active"
    },
    {
      categoryName: "Software Development",
      dataFilter: ".wildlife",
      className: ""
    },
    {
      categoryName: "Management Consultancy & Training",
      dataFilter: ".nature",
      className: ""
    },
    {
      categoryName: "Customer Service",    
      dataFilter: ".citylife",
      className: ""
    },
    // {
    //   image: "assets/img/Sciencepro.jpg",
    //   href: "assets/img/Sciencepro.jpg",
    //   company: "Sciencepro"
    // },
    // {
    //   image: "assets/img/denot.jpg",
    //   href: "assets/img/denot.jpg",
    //   company: "D'EnOt Consulting Co. Ltd."
    // },
    // {
    //   image: "assets/img/mysite.jpg",
    //   href: "assets/img/mysite.jpg",
    //   company: "Mfon Essien Otung",
    // },
    // {
    //   image: "assets/img/meas.jpg",
    //   href: "assets/img/meas.jpg",
    //   company: "Meas-Counselling SARL"
    // },
  ]

  myData = [
    {
      name: "Scienpro",
      image: "assets/img/Sciencepro.jpg",
      categorySlugs: "citylife wildlife",
      href: "assets/img/Sciencepro.jpg",
    },
    {
      name: "D'Enot Company Consulting Co. Ltd.",
      image: "assets/img/denot.jpg",
      categorySlugs: "nature wildlife citylife",
      href: "assets/img/denot.jpg",
    },
    {
      name: "Meas-Counselling SARL",
      image: "assets/img/meas.jpg",
      categorySlugs: "citylife wildlife",
      href: "assets/img/meas.jpg",
    },
    {
      name: "My Personal Website",
      image: "assets/img/mysite.jpg",
      categorySlugs: "wildlife nature citylife",
      href: "assets/img/mysite.jpg",
    },

  ]
}
