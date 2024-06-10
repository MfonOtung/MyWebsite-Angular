import { Component } from '@angular/core';

@Component({
  selector: 'mfon-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  aboutMe = {
    title: "About Me",
    image: "assets/img/AboutMe.png",
    description1: "I am a web developer with contemporary technical skills for developing and designing of websites.",
    description2: "Also, I am a certified Management Consultant with an academic background in Chemical Engineering, I have over 10 years of experience in the consulting industry. I am skillfull in writing proposals, business plans, training modules, and facilitation of trainings/capacity buildings."
  }

}
