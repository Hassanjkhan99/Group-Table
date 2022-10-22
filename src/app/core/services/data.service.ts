import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {DataItem} from '../interfaces/data-item';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
export class DataService {
  tabSets: { [key: string]: DataItem[] } = {};

  constructor(private apiService: ApiService) {
    this.apiService
      .getUsers()
      .pipe(untilDestroyed(this))
      .subscribe((users) => {
        users.forEach((user) => {
          const firstLetter = user.name.first[0];
          if (this.tabSets[firstLetter]) {
            this.tabSets[firstLetter].push({
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
            this.tabSets[firstLetter] = [
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
      });
  }
}
