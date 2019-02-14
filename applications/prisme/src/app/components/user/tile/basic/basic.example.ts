import { Component } from '@angular/core';

@Component({
	selector: 'pri-basic-example',
	templateUrl: './basic.example.html'
})
export class BasicExample {
	user = {
		id: 12,
		firstName: 'John',
		lastName: 'Doe',
	};
}
