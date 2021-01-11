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
exports.select = void 0;
const protractor_1 = require("protractor");
const commonfunctions_1 = require("../projbase/common/commonfunctions");
class select extends commonfunctions_1.commonfunctions {
    constructor() {
        super(...arguments);
        this.fruitselement = protractor_1.element(protractor_1.by.id("fruits"));
        this.fruitpopup = protractor_1.element(protractor_1.by.xpath("(//p[@class='subtitle'])[1]"));
        this.superheros = protractor_1.element(protractor_1.by.id("superheros"));
    }
    selectusingvisibletext(fruitname) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.selectdropdownbyvisibletext(this.fruitselement, fruitname);
            let text = yield this.fruitpopup.getText();
            return text;
        });
    }
    dropdownismultipleornot() {
        return __awaiter(this, void 0, void 0, function* () {
            let bool = yield this.superheros.getAttribute("multiple");
            console.log(bool);
            return bool;
        });
    }
    selectmultiplevalues() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.superheros.element(protractor_1.by.xpath("//option[text()='Ant-Man']")).click();
            yield this.superheros.element(protractor_1.by.xpath("//*[@value='aq']")).click();
        });
    }
    getalloptions() {
        return __awaiter(this, void 0, void 0, function* () {
            let list = yield this.superheros.element(protractor_1.by.xpath("//*[@id='superheros']/option"));
            return list;
        });
    }
}
exports.select = select;
