
import { by, element } from "protractor"; 
import { commonfunctions } from "../projbase/common/commonfunctions";

export class login extends commonfunctions { 

   email=  element(by.name("email")); 
   password =  element(by.name("password")); 
   loginBtn =  element(by.xpath("//button[text()='LOGIN']")); 
      

    async enterEmail(emailtd: string){ 
      // await  this.email.sendkeys(emailtd); 
         await this.clearandtype(this.email, emailtd);
    } 
     

    async enterPassword(passwordtd: string){ 
      // await  this.password.sendkeys(passwordtd); 
         await this.clearandtype(this.password, passwordtd);
    } 


     async submitLoginBtn(){ 
       // await this.loginBtn.click(); 
        await this.click(this.loginBtn);
        } 
     
    } 