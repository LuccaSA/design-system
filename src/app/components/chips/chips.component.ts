import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {

  public chipBasicCode =
`<div class="chip">
  Ned Stark
  <button class="chip-kill"></button>
</div>
<div class="chip">
  Tywin Lannister
  <button class="chip-kill"></button>
</div>
<div class="chip">
  Drogo
  <button class="chip-kill"></button>
</div>
<div class="chip">
  Joffrey Baratheon
  <button class="chip-kill"></button>
</div>`;

  public chipUnkillable =
`<div class="chip mod-unkillable">
  Connor MacLeod
</div>
<div class="chip mod-unkillable">
  Claire Bennet
</div>
<div class="chip mod-unkillable">
  Wade Winston Wilson
</div>`;
  constructor() { }

  ngOnInit() {
  }

}
