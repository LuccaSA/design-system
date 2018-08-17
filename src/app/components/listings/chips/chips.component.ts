import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ds-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {

  public chipBasicCode =
`<div class="chip">
  Ned Stark
  <button class="chip-kill"></button>
</div>`;

  public chipUnkillable =
`<div class="chip mod-unkillable">
  Connor MacLeod
</div>`;
  constructor() { }

  ngOnInit() {
  }

}
