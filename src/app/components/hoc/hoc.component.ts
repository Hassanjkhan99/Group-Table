import {Component, OnInit} from '@angular/core';
import {ThemeService} from "../../core/services/theme.service";
import {Theme} from "../../core/enums/theme";

@Component({
  selector: 'app-hoc',
  templateUrl: './hoc.component.html',
  styleUrls: ['./hoc.component.scss']
})
export class HOCComponent implements OnInit {
  themeEnum = Theme
  currentTheme: Theme = Theme.MaterialUI;
  constructor(public themeService:ThemeService) { }

  ngOnInit(): void {
    this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme
    })
  }

}
