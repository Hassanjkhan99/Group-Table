import {Component, OnInit} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {Theme} from "../../core/enums/theme";
import {ThemeService} from "../../core/services/theme.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzRadioModule} from "ng-zorro-antd/radio";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {NzCardModule} from "ng-zorro-antd/card";

@UntilDestroy()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    MatToolbarModule,
    MatButtonToggleModule,
    NzMenuModule,
    NzRadioModule,
    FormsModule,
    NgIf,
    NzCardModule
  ],
  standalone: true
})
export class HeaderComponent implements OnInit {
  themeEnum = Theme
  theme: Theme = Theme.MaterialUI
  constructor(protected themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.themeService.currentTheme$.pipe(untilDestroyed(this)).subscribe(theme => {
      this.theme = theme
    })

  }

  ThemeChange(theme: Theme) {
    this.themeService.currentTheme$.next(theme)
    this.theme = theme
  }
}
