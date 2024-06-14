import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor() { }
  getTechSkills(){
    return [
      {
        skillName: "Java",
        colour: "warning",
        range: "70",
        style: "width: 70%",
        progressBar: "70%"
      },
      {
        skillName: "Springboot",
        colour: "info",
        range: "65",
        style: "width: 65%",
        progressBar: "65%"
      },
      {
        skillName: "HTML",
        colour: "success",
        range: "60",
        style: "width: 60%",
        progressBar: "60%"
      },
      {
        skillName: "CSS",
        colour: "info",
        range: "50",
        style: "width: 50%",
        progressBar: "50%"
      },
      {
        skillName: "Angular",
        colour: "warning",
        range: "50",
        style: "width: 50%",
        progressBar: "50%"
      },
      {
        skillName: "Bootsrap",
        colour: "purple",
        range: "50",
        style: "width: 50%",
        progressBar: "50%"
      },
      {
        skillName: "Python",
        colour: "crimson",
        range: "30",
        style: "width: 30%",
        progressBar: "30%"
      },
      {
        skillName: "MySQL",
        colour: "middleslateblau",
        range: "30",
        style: "width: 30%",
        progressBar: "30%"
      },
    ]
  }
    
  getSoftSkills(){
    return [
      {
        skillName: "Communication Skill",
        colour: "progress-bar progress-bar-success",
        range: "95",
        style: "width: 95%",
        progressBar: "95%"
  
      },
      {skillName: "Teamwork",
        colour: "progress-bar progress-bar-crimson",
        range: "95",
        style: "width: 95%",
        progressBar: "95%"
      },
      {skillName: "Emotional Intelligence",
        colour: "progress-bar progress-bar-warning",
        range: "90",
        style: "width: 90%",
        progressBar: "90%"
      },
      {skillName: "Time Mnagement",
        colour: "progress-bar progress-bar-middleslateblue",
        range: "90",
        style: "width: 90%",
        progressBar: "90%"
      },
      {skillName: "Research & Strategy",
        colour: "progress-bar progress-bar-purple",
        range: "80",
        style: "width: 80%",
        progressBar: "80%"
      },
      {skillName: "Analytical Skill",
        colour: "progress-bar progress-bar-info",
        range: "80",
        style: "width: 80%",
        progressBar: "80%"
      },
      {skillName: "Project Management",
        colour: "progress-bar progress-bar-cyan",
        range: "80",
        style: "width: 80%",
        progressBar: "80%"
      },
    ]
  }
}
