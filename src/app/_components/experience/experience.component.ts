import { Component } from '@angular/core';

@Component({
  selector: 'mfon-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  myExperince = {
    title: "Work Experience",
    company1: "Meas-Counselling SARL, Yoaunde, Cameroun",
    position1: "Digital Assistant Manager (Homeoffice)",
    date1: "Oct. 2021 - Mar. 2024",
    description1: "Redesigning, Monitoring and Update of contents on the website.",

    company2: "Princestandford Global Management Consultancy Firm, Abuja, Nigeria",
    position2: "Business Process Manager",
    date2: "Mar. 2020 - Dec. 2022",
    description2: "Creating, Maintaining, and conducting training on the company's business process.",

    company3: "Jk Consulting Company Limited, Abuja, Nigeria",
    position3: "Special Assistant to the Managing Director & Business Development Officer",
    date3: "Nov. 2012 - Mar. 2020",
    description3: "Organizing appointments, Interfacing between clients and the company, Representing the company at corporate meetings, Ensuring compliance to standards and requirements, Overseeing the entire bidding process, Coordination and facilitation of trainings, Marketing of the comapny's products and services.",

    company4: "State Secretariat, Awka, Anambra State, Nigeria",
    position4: "National Youth Service Corp Member",
    date4: "Oct. 2010 - Oct. 2011",
    description4: "Calculation of retirement benefits, and management of pensioners' complaints.",

    company5: "Michelle Pharmaceuticals, Enugu, Enugu State, Nigeria",
    position5: "Industrial Trainee",
    date5: "Mar. 2007 - Aug. 2007",
    description5: "Identification of pharmaceutical raw materials, Disintegration and Dissolution Test, Blistering and packaging of drugs.",

    company6: "Akwa Ibom State Water Board, Uyo, Akwa Ibom State, Nigeria",
    position6: "Industrial Trainee",
    date6: "Sep. 2006 - Nov. 2006",
    description6: "Water Quality Assurance."
}

}
