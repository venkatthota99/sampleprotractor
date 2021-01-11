import { browser, by, element } from "protractor";
import { commonfunctions } from "../projbase/common/commonfunctions";


export class dragaui extends commonfunctions {

 dragsource = element(by.id("sample-box")); 

 async dragbylocation(){
    
    // let src = await this.dragsource;
    // await this.mouseHoverAndClick(src);
     let locationX = (await this.dragsource.getLocation()).x;
     console.log(locationX);
     let locationY = (await this.dragsource.getLocation()).y;
     console.log(locationY);
     await browser.actions().dragAndDrop(await this.dragsource.getWebElement(),  
     {
         x: locationX + 100,
         y: locationY + 200
     }  
     
     ).perform();
   await  browser.sleep(5000);
   }


}