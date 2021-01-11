import { browser, by, element, Key } from "protractor"
import { protractor } from "protractor/built/ptor";
import { commonfunctions } from "../projbase/common/commonfunctions"


export class selectauitab extends commonfunctions {


protrac = element(by.xpath("//h3[text()='Protractor']"));
selenium = element(by.xpath("//h3[text()='Selenium']"));
cypress = element(by.xpath("//h3[text()='Cypress']"));

 async multiselectaui() {

    await browser.actions()
    .sendKeys(protractor.Key.CONTROL)
    .click(await this.protrac.getWebElement())
    .click(await this.selenium.getWebElement())
    .click(await this.cypress.getWebElement())
    .perform();
    
 }

}