export const basicCode =
`<lu-user-tile class="user-tile" [user]="anais"></lu-user-tile>`;
export const basicTsCode =
`import { Component, OnInit } from '@angular/core';
import { IUser } from '@lucca-front/ng';

@Component({
  ...
})
export class YourComponent {
  anais: IUser = {
    id: 12,
    firstName: 'Anaïs',
    lastName: 'Lemoustier',
    picture: {
      href:
        'https://upload.wikimedia.org/wikipedia/commons/e/ec/Ana%C3%AFs_Demoustier_Cabourg_2015.jpg',
    },
    jobTitle: 'Actress',
  };
}`;
