import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTileComponent } from './user-tile/user-tile.component';
import { LuUserModule } from '@lucca-front/ng';
import { DsCommonsModule } from '../../commons/commons.module';

@NgModule({
  imports: [
    CommonModule,
    LuUserModule,
    DsCommonsModule
  ],
  declarations: [
    UserTileComponent
  ]
})
export class UsersModule { }
