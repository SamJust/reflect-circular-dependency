import { decorate } from "../decorator";
import { Action } from "./Action";

export class User {
	@decorate()
	action!:Action;
}