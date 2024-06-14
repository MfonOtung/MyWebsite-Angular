import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }
  getExperience(){
    return [
      {
        company: "Meas-Counselling SARL, Yoaunde, Cameroun",
        position: "Digital Assistant Manager (Homeoffice)",
        date: "Oct. 2021 - Mar. 2024",
        description: "Redesigning, Monitoring and Update of contents on the website."
      },
      {
        company: "Princestandford Global Management Consultancy Firm, Abuja, Nigeria",
        position: "Business Process Manager",
        date: "Mar. 2020 - Dec. 2022",
        description: "Creating, Maintaining, and conducting training on the company's business process."
      },
      {
        company: "Jk Consulting Company Limited, Abuja, Nigeria",
        position: "Special Assistant to the Managing Director & Business Development Officer",
        date: "Nov. 2012 - Mar. 2020",
        description: "Organizing appointments, Interfacing between clients and the company, Representing the company at corporate meetings, Ensuring compliance to standards and requirements, Overseeing the entire bidding process, Coordination and facilitation of trainings, Marketing of the comapny's products and services."
      },
      {
        company: "State Secretariat, Awka, Anambra State, Nigeria",
        position: "National Youth Service Corp Member",
        date: "Oct. 2010 - Oct. 2011",
        description: "Calculation of retirement benefits, and management of pensioners' complaints."
      },
      {
        company: "Michelle Pharmaceuticals, Enugu, Enugu State, Nigeria",
        position: "Industrial Trainee",
        date: "Mar. 2007 - Aug. 2007",
        description: "Identification of pharmaceutical raw materials, Disintegration and Dissolution Test, Blistering and packaging of drugs."
      },
      {
        company: "Akwa Ibom State Water Board, Uyo, Akwa Ibom State, Nigeria",
        position: "Industrial Trainee",
        date: "Sep. 2006 - Nov. 2006",
        description: "Water Quality Assurance."
      },
    ]
  }
}
