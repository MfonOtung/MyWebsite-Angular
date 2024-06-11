import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./_components/header/header.component";
import { BannerComponent } from "./_components/banner/banner.component";
import { AboutMeComponent } from "./_components/about-me/about-me.component";
import { MySkillsComponent } from "./_components/my-skills/my-skills.component";
import { ExperienceComponent } from "./_components/experience/experience.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, BannerComponent, AboutMeComponent, MySkillsComponent, ExperienceComponent]
})
export class AppComponent {
  title = 'MfonWebApp_a';
}
