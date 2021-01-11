import { by, element } from "protractor";
import { commonfunctions } from "../projbase/common/commonfunctions";


 export class welcomeautomationpage extends commonfunctions {
    
     simpletable = element(by.id("simpletable"));
     inputtab = element(by.name("input"));
     buttontab = element(by.id("button"));
     selecttab = element(by.name("dropdowns"));
     alerttab = element(by.id("alert"));
     frametab = element(by.id("myframe"));
     radiotab = element(by.name("radio-checks"));
     dragtab = element(by.xpath("//button[@routerlink='/draggable']"));
     droptab = element(by.id("drop"));
     selectauitab = element(by.id("selectable"));

    
     async entersimpletable(){
         await this.click(this.simpletable);
     }

     async enterinputtab(){
         await this.click(this.inputtab);
     }

     async enterbuttontab(){
         await this.click(this.buttontab);
     }

     async enterselecttab(){
         await this.click(this.selecttab);
     }

     async enteralerttab(){
         await this.click(this.alerttab);
     }

     async enterframetab(){
         await this.click(this.frametab);
     }

     async enterradiotab(){
         await this.click(this.radiotab);
     }

     async enterdragaui(){
         await this.click(this.dragtab);
     }

     async enterdropaui(){
        await this.click(this.droptab);
    }

    async enterselectaui(){
        await this.click(this.selectauitab);
    }

 }