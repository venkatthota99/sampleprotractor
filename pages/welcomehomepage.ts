import { by, element } from "protractor";
import { commonfunctions } from "../projbase/common/commonfunctions";


export class welcomehomepage extends commonfunctions {

   letgo = element(by.id("testing"));


  async entertestingpractice(){
       await this.click(this.letgo);
   }


}