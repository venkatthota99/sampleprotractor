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
const protractor_1 = require("protractor");
const alertpage_1 = require("../pages/alertpage");
const headerpage_1 = require("../pages/headerpage");
const loginpage_1 = require("../pages/loginpage");
const welcomeautomationpage_1 = require("../pages/welcomeautomationpage");
const welcomehomepage_1 = require("../pages/welcomehomepage");
const loginv = new loginpage_1.login();
const headerv = new headerpage_1.header();
const welcomehomepagev = new welcomehomepage_1.welcomehomepage();
const welcomeautomationpagev = new welcomeautomationpage_1.welcomeautomationpage();
const alertpagev = new alertpage_1.alertpage();
describe("alerttab suite", () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.manage().timeouts().implicitlyWait(5000);
    }));
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://letcode.in/signin");
        yield headerv.clickLogInBtn();
        yield loginv.enterEmail("vthota.ca@gmail.com");
        yield loginv.enterPassword("Hanuman221");
        yield loginv.submitLoginBtn();
        yield headerv.signoutTxtdisplayed();
        yield welcomehomepagev.entertestingpractice();
        yield welcomeautomationpagev.enteralerttab();
    }));
    it("acceptalert", () => __awaiter(void 0, void 0, void 0, function* () {
        yield alertpagev.simpleacceptalert();
    }));
    it("confirmacceptalert", () => __awaiter(void 0, void 0, void 0, function* () {
        let alerttext = yield alertpagev.confirmacceptalert();
        expect(alerttext).toBe("Are you happy with LetCode");
    }));
    it("promptalert", () => __awaiter(void 0, void 0, void 0, function* () {
        yield alertpagev.promptsendkeysalert();
    }));
    it("modernalert", () => __awaiter(void 0, void 0, void 0, function* () {
        yield alertpagev.modernacceptalert();
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.sleep(5000);
        yield headerv.clicksignout();
    }));
});
