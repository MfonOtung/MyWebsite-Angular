import { Component } from '@angular/core';

@Component({
  selector: 'mfon-my-contact',
  standalone: true,
  imports: [],
  templateUrl: './my-contact.component.html',
  styleUrl: './my-contact.component.css'
})
export class MyContactComponent {
  myContact = {
    title: "Contact",
    phone: "+4917689279727",
    email: "mfon.e.otung@gmail.com",
    adress: "Leuschnerstr. 52, 95447 Bayreuth " 
  }

}
