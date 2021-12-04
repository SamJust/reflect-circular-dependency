"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decorate = void 0;
function decorate() {
    return function (target, propertyName) {
        console.log(`Just evaluating ${propertyName} property`);
    };
}
exports.decorate = decorate;
