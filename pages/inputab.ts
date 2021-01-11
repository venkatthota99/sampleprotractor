import { by, element } from "protractor";
import { commonfunctions } from "../projbase/common/commonfunctions";

export class inputtab extends commonfunctions {

    entername = element(by.id("fullName"));
    join = element(by.id("join"));
    gettextfromfield = element(by.id("getMe"));
    clearfieldtext =element(by.id("clearMe"));
    isdisabledfield = element(by.id("noEdit"));

async enteryourfullname(typename){
    await this.type(this.entername, typename);
}

async joinword(word){
    await this.typeAndTab(this.join, word);
}

async getattributefrominput(){
    let attri = await this.gettextfromfield.getAttribute("value");
    return attri;
}

async clearfield(){
    await this.clear(this.clearfieldtext);
}

async fielddisabled(){
    let bool =await this.isenabled(this.isdisabledfield);
    console.log(bool);
    return bool;
}



}