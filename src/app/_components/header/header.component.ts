import { Component } from '@angular/core';
import { HeaderService } from '../../_services/header.service';

@Component({
  selector: 'mfon-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  headerTitles: any

  constructor(private headS: HeaderService){
    this.headerTitles = headS.getHeaders()
  }




}
