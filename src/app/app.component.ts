import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Favorit Recipes Searcher';
  getUrl()
{
  return "url('https://www.freshmealplan.com/Themes/FMPNewTheme/Content/assets/images/home-banner.webp')";
}
}
