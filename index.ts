import "reflect-metadata";
import { Action } from "./classes/Action";
import { User } from "./classes/User";

setTimeout(() => {
	const action = new Action();
	const user = new User();
	console.log(Reflect.getMetadata('design:type', action, 'user'));
	console.log(Reflect.getMetadata('design:type', user, 'action'));
});