import { decorate } from "../decorator";
import { User } from "./User";

export class Action {
	@decorate()
	user!: User;
}