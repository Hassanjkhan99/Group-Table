import {Injectable} from '@angular/core';
import {Theme} from "../enums/theme";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  currentTheme$: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(Theme.MaterialUI)

  constructor() { }

}
