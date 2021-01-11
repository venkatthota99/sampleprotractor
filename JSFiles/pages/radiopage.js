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
exports.radio = void 0;
const protractor_1 = require("protractor");
const commonfunctions_1 = require("../projbase/common/commonfunctions");
class radio extends commonfunctions_1.commonfunctions {
    constructor() {
        super(...arguments);
        this.selectyes = protractor_1.element(protractor_1.by.xpath("(//*[@id='yes']"));
        this.radiodisabled = protractor_1.element(protractor_1.by.id("maybe"));
    }
    selectanyone() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(5000);
            yield this.mouseHoverAndClick(this.selectyes);
            protractor_1.browser.sleep(5000);
            let selectyesdone = yield this.selectyes.isSelected();
            return selectyesdone;
        });
    }
    confirmlastfieldisdisabled() {
        return __awaiter(this, void 0, void 0, function* () {
            let radioenabled = yield this.radiodisabled.isEnabled();
            return radioenabled;
        });
    }
}
exports.radio = radio;
