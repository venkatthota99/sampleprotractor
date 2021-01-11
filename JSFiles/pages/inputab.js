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
exports.inputtab = void 0;
const protractor_1 = require("protractor");
const commonfunctions_1 = require("../projbase/common/commonfunctions");
class inputtab extends commonfunctions_1.commonfunctions {
    constructor() {
        super(...arguments);
        this.entername = protractor_1.element(protractor_1.by.id("fullName"));
        this.join = protractor_1.element(protractor_1.by.id("join"));
        this.gettextfromfield = protractor_1.element(protractor_1.by.id("getMe"));
        this.clearfieldtext = protractor_1.element(protractor_1.by.id("clearMe"));
        this.isdisabledfield = protractor_1.element(protractor_1.by.id("noEdit"));
    }
    enteryourfullname(typename) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.type(this.entername, typename);
        });
    }
    joinword(word) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.typeAndTab(this.join, word);
        });
    }
    getattributefrominput() {
        return __awaiter(this, void 0, void 0, function* () {
            let attri = yield this.gettextfromfield.getAttribute("value");
            return attri;
        });
    }
    clearfield() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clear(this.clearfieldtext);
        });
    }
    fielddisabled() {
        return __awaiter(this, void 0, void 0, function* () {
            let bool = yield this.isenabled(this.isdisabledfield);
            console.log(bool);
            return bool;
        });
    }
}
exports.inputtab = inputtab;
