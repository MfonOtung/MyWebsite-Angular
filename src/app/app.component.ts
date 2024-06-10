import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./_components/header/header.component";
import { BannerComponent } from "./_components/banner/banner.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, BannerComponent]
})
export class AppComponent {
  title = 'MfonWebApp_a';
}
