"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const Action_1 = require("./classes/Action");
const User_1 = require("./classes/User");
setTimeout(() => {
    const action = new Action_1.Action();
    const user = new User_1.User();
    console.log(Reflect.getMetadata('design:type', action, 'user'));
    console.log(Reflect.getMetadata('design:type', user, 'action'));
});
