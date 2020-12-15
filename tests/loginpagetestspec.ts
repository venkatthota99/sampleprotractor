import { browser } from "protractor"; 
import { header } from "../pages/headerpage";
import { login } from "../pages/loginpage"; 
 
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
         await loginv.enterEmail("vthota.ca@gmail.com");
         await loginv.enterPassword("Hanuman221"); 
         await loginv.submitLoginBtn(); 
         await headerv.signoutTxtdisplayed();         

     } ); 
   

    }); 

 