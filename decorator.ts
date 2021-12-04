export function decorate() {
	return function (target: any, propertyName: string) {
		console.log(`Just evaluating ${propertyName} property`);
	}
}