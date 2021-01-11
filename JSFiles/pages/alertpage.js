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
exports.alertpage = void 0;
const protractor_1 = require("protractor");
const commonfunctions_1 = require("../projbase/common/commonfunctions");
class alertpage extends commonfunctions_1.commonfunctions {
    constructor() {
        super(...arguments);
        this.simplealert = protractor_1.element(protractor_1.by.id("accept"));
        this.confirmalert = protractor_1.element(protractor_1.by.id("confirm"));
        this.promptalert = protractor_1.element(protractor_1.by.id("prompt"));
        this.modernalert = protractor_1.element(protractor_1.by.id("modern"));
    }
    simpleacceptalert() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.simplealert.click();
            yield protractor_1.browser.sleep(5000);
            yield this.acceptAlert();
        });
    }
    confirmacceptalert() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.confirmalert.click();
            yield protractor_1.browser.sleep(5000);
            let alerttext = yield this.getTextFromAlert();
            yield protractor_1.browser.sleep(5000);
            yield this.dismissAlert();
            return alerttext;
        });
    }
    promptsendkeysalert() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.promptalert.click();
            yield protractor_1.browser.sleep(5000);
            yield this.typeInAlert("venkat");
            yield protractor_1.browser.sleep(5000);
            yield this.acceptAlert();
        });
    }
    modernacceptalert() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.modernalert.click();
            yield protractor_1.browser.sleep(5000);
            yield this.acceptAlert();
        });
    }
}
exports.alertpage = alertpage;
