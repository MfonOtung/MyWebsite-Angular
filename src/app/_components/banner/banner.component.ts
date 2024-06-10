import { Component } from '@angular/core';

@Component({
  selector: 'mfon-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  banner = {
    welcome: "Hello!",
    messageStart: "I am ",
    firstName: "Mfon E.",
    lastName: "Otung",
    description: "A Management Consultant & Web Developer",
    email: "mfon.e.otung@gmail.com",
    clickButton: "Hire Me!",
    image: "assets/Mfon-pic.jpg"
  }

}
