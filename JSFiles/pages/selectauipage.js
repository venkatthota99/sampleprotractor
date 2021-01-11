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
exports.selectauitab = void 0;
const protractor_1 = require("protractor");
const ptor_1 = require("protractor/built/ptor");
const commonfunctions_1 = require("../projbase/common/commonfunctions");
class selectauitab extends commonfunctions_1.commonfunctions {
    constructor() {
        super(...arguments);
        this.protrac = protractor_1.element(protractor_1.by.xpath("//h3[text()='Protractor']"));
        this.selenium = protractor_1.element(protractor_1.by.xpath("//h3[text()='Selenium']"));
        this.cypress = protractor_1.element(protractor_1.by.xpath("//h3[text()='Cypress']"));
    }
    multiselectaui() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.actions()
                .sendKeys(ptor_1.protractor.Key.CONTROL)
                .click(yield this.protrac.getWebElement())
                .click(yield this.selenium.getWebElement())
                .click(yield this.cypress.getWebElement())
                .perform();
        });
    }
}
exports.selectauitab = selectauitab;
