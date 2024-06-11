import { Component } from '@angular/core';

@Component({
  selector: 'mfon-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.css'
})
export class MySkillsComponent {
  mySkills = {
    title: "My Skills",
    subtitle1: "Technical Skills:",
    subtitle2: "Technical Skills:",
    skill1: "Java",
    skill2: "Springboot",
    skill3: "HTML",
    skill4: "CSS",
    skill5: "Angular",
    skill6: "Bootsrap",
    skill7: "Python",
    skill8: "MySQL",
    skill9: "Communication Skill",
    skill10: "Teamwork",
    skill11: "Emotional Intelligence",
    skill12: "Time Mnagement",
    skill13: "Research & Strategy",
    skill14: "Analytical Skill",
    skill15: "Project Management"
  }

}
