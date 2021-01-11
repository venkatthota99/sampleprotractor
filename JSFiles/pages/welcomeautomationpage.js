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
exports.welcomeautomationpage = void 0;
const protractor_1 = require("protractor");
const commonfunctions_1 = require("../projbase/common/commonfunctions");
class welcomeautomationpage extends commonfunctions_1.commonfunctions {
    constructor() {
        super(...arguments);
        this.simpletable = protractor_1.element(protractor_1.by.id("simpletable"));
        this.inputtab = protractor_1.element(protractor_1.by.name("input"));
        this.buttontab = protractor_1.element(protractor_1.by.id("button"));
        this.selecttab = protractor_1.element(protractor_1.by.name("dropdowns"));
        this.alerttab = protractor_1.element(protractor_1.by.id("alert"));
        this.frametab = protractor_1.element(protractor_1.by.id("myframe"));
        this.radiotab = protractor_1.element(protractor_1.by.name("radio-checks"));
        this.dragtab = protractor_1.element(protractor_1.by.xpath("//button[@routerlink='/draggable']"));
        this.droptab = protractor_1.element(protractor_1.by.id("drop"));
        this.selectauitab = protractor_1.element(protractor_1.by.id("selectable"));
    }
    entersimpletable() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.simpletable);
        });
    }
    enterinputtab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.inputtab);
        });
    }
    enterbuttontab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.buttontab);
        });
    }
    enterselecttab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.selecttab);
        });
    }
    enteralerttab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.alerttab);
        });
    }
    enterframetab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.frametab);
        });
    }
    enterradiotab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.radiotab);
        });
    }
    enterdragaui() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.dragtab);
        });
    }
    enterdropaui() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.droptab);
        });
    }
    enterselectaui() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.selectauitab);
        });
    }
}
exports.welcomeautomationpage = welcomeautomationpage;
