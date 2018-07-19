import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTileComponent } from './user-tile/user-tile.component';
import { LuUserModule } from '@lucca-front/ng';
import { CommonsModule } from '../../commons/commons.module';

@NgModule({
  imports: [
    CommonModule,
    LuUserModule,
    CommonsModule
  ],
  declarations: [
    UserTileComponent
  ]
})
export class UsersModule { }
