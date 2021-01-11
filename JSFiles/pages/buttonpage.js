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
exports.button = void 0;
const protractor_1 = require("protractor");
const commonfunctions_1 = require("../projbase/common/commonfunctions");
class button extends commonfunctions_1.commonfunctions {
    constructor() {
        super(...arguments);
        this.xyelement = protractor_1.element(protractor_1.by.id("position"));
        this.colorelement = protractor_1.element(protractor_1.by.id("color"));
        this.heightelement = protractor_1.element(protractor_1.by.id("property"));
    }
    getxcoordinates() {
        return __awaiter(this, void 0, void 0, function* () {
            let point = yield this.xyelement.getLocation();
            let xcord = yield point.x;
            console.log(xcord);
            return xcord;
        });
    }
    getycoordinates() {
        return __awaiter(this, void 0, void 0, function* () {
            let point = yield this.xyelement.getLocation();
            let ycord = yield point.y;
            console.log(ycord);
            return ycord;
        });
    }
    getcolorofthebutton() {
        return __awaiter(this, void 0, void 0, function* () {
            let color = yield this.colorelement.getCssValue("color");
            console.log(color);
            return color;
        });
    }
    getheightandwidth() {
        return __awaiter(this, void 0, void 0, function* () {
            let size = yield this.heightelement.getSize();
            return size;
        });
    }
}
exports.button = button;
