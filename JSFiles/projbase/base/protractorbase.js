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
exports.ProtractorBase = void 0;
const protractor_1 = require("protractor");
const ptor_1 = require("protractor/built/ptor");
class ProtractorBase {
    constructor() {
        this.ec = protractor_1.browser.ExpectedConditions;
        this.timeOut = 30000;
    }
    click(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.ec.elementToBeClickable(element), this.timeOut, "Failed to click the element");
            yield element.click();
        });
    }
    type(element, testdata) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.ec.visibilityOf(element), this.timeOut, "element not visible");
            yield element.sendKeys(testdata);
        });
    }
    clearandtype(element, testdata) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.ec.visibilityOf(element), this.timeOut, "element not visible");
            yield element.clear();
            yield element.sendKeys(testdata);
        });
    }
    assertText(element, expectedtext) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.ec.visibilityOf(element), this.timeOut, "element not visible");
            let actualtext = yield element.getText();
            expect(actualtext.trim()).toBe(expectedtext);
        });
    }
    assertTrue(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.ec.visibilityOf(element), this.timeOut, "element not visible");
            expect(yield element.isDisplayed()).toBe(true);
        });
    }
    assertFalse(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.ec.visibilityOf(element), this.timeOut, "element not visible");
            expect(yield element.isDisplayed()).toBe(false);
        });
    }
    acceptAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.ec.alertIsPresent(), this.timeOut, "Alert is not present");
            yield (yield protractor_1.browser.switchTo().alert()).accept();
        });
    }
    dismissAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.ec.alertIsPresent(), this.timeOut, "Alert is not present");
            yield (yield protractor_1.browser.switchTo().alert()).dismiss();
        });
    }
    typeInAlert(alertdata) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.ec.alertIsPresent(), this.timeOut, "Alert is not present");
            yield (yield protractor_1.browser.switchTo().alert()).sendKeys(alertdata);
        });
    }
    getTextFromAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.ec.alertIsPresent(), this.timeOut, "Alert is not present");
            let alerttext = yield (yield protractor_1.browser.switchTo().alert()).getText();
            return alerttext;
        });
    }
    switchToFrame(framenumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.switchTo().frame(framenumber);
        });
    }
    typeAndTab(element, testdata) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.ec.visibilityOf(element), this.timeOut, "element not visible");
            yield element.sendKeys(testdata, ptor_1.protractor.Key.TAB);
        });
    }
    typeAndEnter(element, testdata) {
        return __awaiter(this, void 0, void 0, function* () {
            let capabilities = yield protractor_1.browser.getCapabilities();
            let platform = yield capabilities.get('platform');
            yield protractor_1.browser.wait(this.ec.visibilityOf(element), this.timeOut, "element not visible");
            yield element.clear();
            if (platform == 'Mac OS X') {
                yield element.sendKeys(testdata, ptor_1.protractor.Key.RETURN);
            }
            else {
                yield element.sendKeys(testdata, ptor_1.protractor.Key.ENTER);
            }
        });
    }
    mouseHoverAndClick(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.ec.visibilityOf(element), this.timeOut, "element not visible");
            yield protractor_1.browser.actions().mouseMove(yield element.getWebElement())
                .click()
                .perform();
        });
    }
    mouseHover(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.ec.visibilityOf(element), this.timeOut, "element not visible");
            yield protractor_1.browser.actions().mouseMove(yield element.getWebElement())
                .perform();
        });
    }
    clear(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.ec.visibilityOf(element), this.timeOut, "element not visible");
            yield element.clear();
        });
    }
    isenabled(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.ec.visibilityOf(element), this.timeOut, "element not visible");
            yield element.isEnabled();
        });
    }
    selectdropdownbyvisibletext(dropdownelement, visibletext) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.ec.visibilityOf(dropdownelement), this.timeOut, "element not visible");
            yield dropdownelement.click();
            yield dropdownelement.element(protractor_1.by.xpath("//option[text()='" + visibletext + "']")).click();
        });
    }
    selectdropdownbyvalue(dropdownelement, valuetext) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.ec.visibilityOf(dropdownelement), this.timeOut, "element not visible");
            yield dropdownelement.click();
            yield dropdownelement.element(protractor_1.by.xpath("//*[@value='" + valuetext + "']")).click();
        });
    }
    selectdropdown(dropdownelement) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.ec.visibilityOf(dropdownelement), this.timeOut, "element not visible");
            yield dropdownelement.click();
        });
    }
}
exports.ProtractorBase = ProtractorBase;
