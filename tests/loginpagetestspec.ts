import { browser } from "protractor"; 
import { header } from "../pages/headerpage";
import { login } from "../pages/loginpage"; 
import userdata from"../testdata/userinfo.json";
 
const loginv = new login(); 
const headerv = new header(); 


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
         await loginv.enterEmail(userdata.signup.email);
         await loginv.enterPassword(userdata.signup.password); 
         await loginv.submitLoginBtn(); 
         await headerv.signoutTxtdisplayed();         

     } ); 
   

    }); 

 