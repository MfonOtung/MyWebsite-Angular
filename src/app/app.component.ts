import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./_components/header/header.component";
import { BannerComponent } from "./_components/banner/banner.component";
import { AboutMeComponent } from "./_components/about-me/about-me.component";
import { ExperienceComponent } from "./_components/experience/experience.component";
import { MySkillsComponent } from "./_components/my-skills/my-skills.component";
import { PortfolioComponent } from "./_components/portfolio/portfolio.component";
import { MyContactComponent } from "./_components/my-contact/my-contact.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, BannerComponent, AboutMeComponent, ExperienceComponent, MySkillsComponent, PortfolioComponent, MyContactComponent]
})
export class AppComponent {
  title = 'MfonWebApp_a';
}
