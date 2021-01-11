"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dragaui = void 0;
const protractor_1 = require("protractor");
const commonfunctions_1 = require("../projbase/common/commonfunctions");
class dragaui extends commonfunctions_1.commonfunctions {
    constructor() {
        super(...arguments);
        this.dragsource = protractor_1.element(protractor_1.by.id("sample-box"));
    }
    dragbylocation() {
        return __awaiter(this, void 0, void 0, function* () {
            let locationX = (yield this.dragsource.getLocation()).x;
            console.log(locationX);
            let locationY = (yield this.dragsource.getLocation()).y;
            console.log(locationY);
            yield protractor_1.browser.actions().dragAndDrop(yield this.dragsource.getWebElement(), {
                x: locationX + 100,
                y: locationY + 200
            }).perform();
            yield protractor_1.browser.sleep(5000);
        });
    }
}
exports.dragaui = dragaui;
