import { browser, by, element } from "protractor";
import { commonfunctions } from "../projbase/common/commonfunctions";

export class radio extends commonfunctions {

 
selectyes = element(by.xpath("(//*[@id='yes']"));
radiodisabled = element(by.id("maybe"));

 async selectanyone(){
    browser.sleep(5000);
    await this.mouseHoverAndClick(this.selectyes);
    browser.sleep(5000);
   let selectyesdone =  await this.selectyes.isSelected();
   return selectyesdone;
 }   

 async confirmlastfieldisdisabled(){
    let radioenabled = await this.radiodisabled.isEnabled();
    return radioenabled;
 }
  



}