import { browser } from "protractor"; 
import { header } from "../pages/headerpage";
import { login } from "../pages/loginpage"; 

import userdata from"../testdata/userinfo.json";


 
const loginv = new login(); 
const headerv = new header(); 

declare const allure:any;

describe("loginpage testsuite ", () =>{ 
    beforeAll(async () =>{ 
        await browser.manage().window().maximize();
        await browser.manage().timeouts().implicitlyWait(5000);
        
    }) 

    beforeEach(async() =>{
        await browser.get("https://letcode.in/signin");
    })

     it ("login with correct credentials", async ()=>{ 
         
         await headerv.clickLogInBtn(); 

         await  allure.createStep("enter email",async()=>{
            await loginv.enterEmail(userdata.signup.email)
            await attachscreenshot("enter email")
           // await commonfunctionsv.attachscreenshot('enter email');
         })();

         await  allure.createStep("enter password",async()=>{
            await loginv.enterPassword(userdata.signup.password) 
            await attachscreenshot('enter password')
         })();
         
         await  allure.createStep("submit login",async()=>{
            await loginv.submitLoginBtn() 
            await attachscreenshot('submit login') 
           // await commonfunctionsv.attachscreenshot('submit login')
         })();         
         
         await headerv.signoutTxtdisplayed();            
        }); 
    }); 






async function attachscreenshot(filename:String) {
    let png = await browser.takeScreenshot();
    await allure.createAttachment(filename, new Buffer(png, 'base64'));
} 
 