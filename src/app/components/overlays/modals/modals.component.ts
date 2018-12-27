import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
	selector: 'ds-dialog-test',
	template: `<h1>C'est un dialog</h1>`
})
export class DialogTestComponent {}

@Component({
	selector: 'ds-modals',
	templateUrl: './modals.component.html',
	styleUrls: []
})
export class ModalsComponent implements OnInit {

	constructor(public dialog: MatDialog) { }

	ngOnInit() {
	}

	openDialog(): void {
		const dialogRef = this.dialog.open(DialogTestComponent);
	}

}
