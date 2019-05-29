import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'slicePhone' })
export class SlicePhone implements PipeTransform {
	transform(value: number): string {
		const strValue = value.toString();
		if (strValue.length < 3) {
			return '(' + strValue.slice(0, 2) + ')' + ' ';
		}
		else if (strValue.length < 6) {
			return '(' + strValue.slice(0, 2) + ')' + ' ' + strValue.slice(2, 5);
		}
		else if (strValue.length < 8) {
			return '(' + strValue.slice(0, 2) + ')' + ' ' + strValue.slice(2, 5) + '-' + strValue.slice(5, 7);
		}
		else if (strValue.length < 10) {
			return '(' + strValue.slice(0, 2) + ')' + ' ' + strValue.slice(2, 5) + '-' + strValue.slice(5, 7) + '-' + strValue.slice(7, 9);
		}
		else {
			return 'Error invalid number';
		}
	}
}