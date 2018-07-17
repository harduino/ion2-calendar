import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { CalendarComponentOptions } from '../ion2-calendar'

@Component({
	selector: 'demo-multi-four-states',
	template: `
		<hr>
		<h3 style="text-align: center;">multi</h3>
		<ion-calendar [(ngModel)]="date"
			(onChange)="onChange($event)"
			[options]="options"
			type="string"
			format="YYYY-MM-DD">
		</ion-calendar>
	`
})
export class DemoMultiFourStatesComponent {

	date: string[] = ['2018-01-01', '2018-01-02', '2018-01-05'];
	options: CalendarComponentOptions = {
		from: new Date(2000, 0, 1),
		pickMode: 'multi4'
	};
	constructor(public modalCtrl: ModalController) {

	}

	onChange($event) {
		console.log('changed!', $event);
	}
}
