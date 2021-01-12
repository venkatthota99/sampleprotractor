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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const headerpage_1 = require("../pages/headerpage");
const loginpage_1 = require("../pages/loginpage");
const userinfo_json_1 = __importDefault(require("../testdata/userinfo.json"));
const loginv = new loginpage_1.login();
const headerv = new headerpage_1.header();
describe("loginpage testsuite ", () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.manage().timeouts().implicitlyWait(5000);
    }));
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://letcode.in/signin");
    }));
    it("login with correct credentials", () => __awaiter(void 0, void 0, void 0, function* () {
        yield headerv.clickLogInBtn();
        yield loginv.enterEmail(userinfo_json_1.default.signup.email);
        yield loginv.enterPassword(userinfo_json_1.default.signup.password);
        yield loginv.submitLoginBtn();
        yield headerv.signoutTxtdisplayed();
    }));
});
