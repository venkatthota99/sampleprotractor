import { by, element } from "protractor"; 
import { commonfunctions } from "../projbase/common/commonfunctions";

export class header extends commonfunctions{ 

    logInBtn =  element(by.linkText("Log in")); 
    signoutBtn = element(by.linkText("Sign out")); 
    
     async  clickLogInBtn() { 
        await   this.click(this.logInBtn);
      } 
      
      async signoutTxtdisplayed(){ 
         // await  expect(await this.signoutBtn.isDisplayed()).toBe(true); 
           await  this.assertText(this.signoutBtn, "Sign out");
      } 

      async clicksignout(){
          await this.click(this.signoutBtn);
      }
    

    } 