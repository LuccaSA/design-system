import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTileComponent } from './user-tile/user-tile.component';
import { LuUserModule } from '@lucca-front/ng';

@NgModule({
  imports: [
    CommonModule,
    LuUserModule
  ],
  declarations: [
    UserTileComponent
  ]
})
export class UsersModule { }
