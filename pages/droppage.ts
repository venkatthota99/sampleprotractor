import { browser, by, element } from "protractor";
import { commonfunctions } from "../projbase/common/commonfunctions";



export class dropaui extends commonfunctions {


    source = element(by.id("draggable"));
    target = element(by.id("droppable"));

 async draganddrop(){

    await browser.actions().dragAndDrop(await this.source.getWebElement(),await this.target.getWebElement()).perform();
    await browser.sleep(10000);
 }


}