import { Component, OnInit } from '@angular/core';
import { IUser } from '@lucca-front/ng';
import { basicCode, basicTsCode } from './user-tile.basic.example';

@Component({
  selector: 'ds-user-tile',
  templateUrl: './user-tile.component.html',
  styleUrls: ['./user-tile.component.scss']
})
export class UserTileComponent implements OnInit {
  public basicCode = basicCode;
  public basicTsCode = basicTsCode;

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
  constructor() { }

  ngOnInit() {
  }

}
