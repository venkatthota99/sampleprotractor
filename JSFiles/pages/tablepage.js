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
exports.table = void 0;
const protractor_1 = require("protractor");
const commonfunctions_1 = require("../projbase/common/commonfunctions");
class table extends commonfunctions_1.commonfunctions {
    constructor() {
        super(...arguments);
        this.sorttable = protractor_1.element(protractor_1.by.xpath("//table[contains(@class,'mat-sort table')]"));
        this.tablerows = protractor_1.element.all(protractor_1.by.xpath("//table[contains(@class,'mat-sort table')]/tr"));
        this.carbs = protractor_1.element(protractor_1.by.xpath("//div[text()='Carbs (g)']"));
    }
    findcount() {
        return __awaiter(this, void 0, void 0, function* () {
            let tablecount = yield this.tablerows.count();
            yield console.log(tablecount);
            return tablecount;
        });
    }
    getcolumndataandsort(column) {
        return __awaiter(this, void 0, void 0, function* () {
            let columndata = yield this.tablerows.map((ele, index) => __awaiter(this, void 0, void 0, function* () {
                let data = yield ele.$$('td').get(column);
                return yield data.getText();
            }));
            let finalsorted = columndata.sort();
            console.log(finalsorted);
            return finalsorted;
        });
    }
    clickandgetcolumndata(column) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.carbs.click();
            let columndata1 = yield this.tablerows.map((ele1, index) => __awaiter(this, void 0, void 0, function* () {
                let data1 = yield ele1.$$('td').get(column);
                return yield data1.getText();
            }));
            let finalsorted1 = columndata1;
            console.log(finalsorted1);
            return finalsorted1;
        });
    }
}
exports.table = table;
