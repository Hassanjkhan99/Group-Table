import {Component, OnInit} from '@angular/core';
import {ThemeService} from "../../core/services/theme.service";
import {Theme} from "../../core/enums/theme";
import {Select, Store} from "@ngxs/store";
import {AppState} from "../../ngRx/states/app.state";
import {Observable} from "rxjs";
import {Tabsets} from "../../core/interfaces/tabsets";
import {CallApi} from "../../ngRx/actions/app.actions";

@Component({
  selector: 'app-hoc',
  templateUrl: './hoc.component.html',
  styleUrls: ['./hoc.component.scss']
})
export class HOCComponent implements OnInit {
  themeEnum = Theme
  currentTheme: Theme = Theme.MaterialUI;
  @Select(AppState.getTabsets) tabs: Observable<Tabsets>

  constructor(public themeService: ThemeService, private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new CallApi())
    this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme
    })
  }

}
