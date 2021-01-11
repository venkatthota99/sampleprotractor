import { browser, by, element } from "protractor";
import { commonfunctions } from "../projbase/common/commonfunctions";


export class alertpage extends commonfunctions{

simplealert = element(by.id("accept"));
confirmalert = element(by.id("confirm"));
promptalert = element(by.id("prompt"));
modernalert = element(by.id("modern"));


async simpleacceptalert(){

    await this.simplealert.click();
    await browser.sleep(5000);
    await this.acceptAlert();
    
   
}

async confirmacceptalert(){
    
    await this.confirmalert.click();
    await browser.sleep(5000);
    let alerttext = await this.getTextFromAlert();
    await browser.sleep(5000);
    await this.dismissAlert();
    return alerttext;
    
}

async promptsendkeysalert(){
    
    await this.promptalert.click();
    await browser.sleep(5000);
    await this.typeInAlert("venkat");
    await browser.sleep(5000);
    await this.acceptAlert();
    
    
    
}

async modernacceptalert(){

    await this.modernalert.click();
    await browser.sleep(5000);
    await this.acceptAlert();
  
}



}