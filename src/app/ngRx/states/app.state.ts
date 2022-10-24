import {Tabsets} from "../../core/interfaces/tabsets";
import {Action, Selector, State, StateContext, Store} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {ApiService} from "../../core/services/api.service";
import {tap} from "rxjs";
import {CallApi} from "../actions/app.actions";


export interface AppStateModel {
  tabSets: Tabsets
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    tabSets: {}
  },
})
@Injectable()
export class AppState {
  constructor(
    private apiService: ApiService,
    private store: Store,
  ) {
  }

  @Selector()
  static getTabsets(state: AppStateModel) {
    return state.tabSets;
  }


  @Action(CallApi)
  login(
    {getState, patchState}: StateContext<AppStateModel>,
  ) {
    this.apiService
      .getUsers()
      .pipe(
        tap(
          (users) => {
            let tabSets = {};
            users.forEach((user) => {
              const firstLetter = user.name.first[0];
              if (tabSets[firstLetter]) {
                tabSets[firstLetter].push({
                  first: user.name.first,
                  last: user.name.last,
                  gender: user.gender,
                  title: user.name.title,
                  picture: user.picture.large,
                  location: user.location,
                  state: user.location.state,
                  city: user.location.city,
                  country: user.location.country,
                });
              } else {
                tabSets[firstLetter] = [
                  {
                    first: user.name.first,
                    last: user.name.last,
                    gender: user.gender,
                    title: user.name.title,
                    picture: user.picture.large,
                    location: user.location,
                    city: user.location.city,
                    country: user.location.country,
                    state: user.location.state,
                  },
                ];
              }
            });
            patchState({tabSets: tabSets})
          },
          (error) => {
            console.log(error);
          }
        )
      )
      .subscribe();
  }
}
