"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const Action_1 = require("./classes/Action");
const User_1 = require("./classes/User");
setTimeout(() => {
    console.log(Reflect.getMetadata('design:types', User_1.User.prototype, 'action'));
    console.log(Reflect.getMetadata('design:types', Action_1.Action.prototype, 'user'));
});
