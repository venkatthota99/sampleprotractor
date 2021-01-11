import { browser } from "protractor";
import { framepage } from "../pages/framepage";
import { header } from "../pages/headerpage";
import { login } from "../pages/loginpage";
import { radio } from "../pages/radiopage";
import { welcomeautomationpage } from "../pages/welcomeautomationpage";
import { welcomehomepage } from "../pages/welcomehomepage";



const loginv = new login(); 
const headerv = new header();
const welcomehomepagev = new welcomehomepage();
const welcomeautomationpagev = new welcomeautomationpage(); 
const radiov = new radio(); 

describe("radiotab suite",  ()=>{
beforeAll(async ()=>{
    await browser.manage().window().maximize();
    await browser.manage().timeouts().implicitlyWait(5000);
})

beforeEach(async ()=>{
    await browser.get("https://letcode.in/signin");
      await headerv.clickLogInBtn(); 
      await loginv.enterEmail("vthota.ca@gmail.com");
      await loginv.enterPassword("Hanuman221"); 
      await loginv.submitLoginBtn(); 
      await headerv.signoutTxtdisplayed();
      await welcomehomepagev.entertestingpractice();
      await welcomeautomationpagev.enterradiotab();
})

it("verify select yes", async()=>{ 
      let selectyesdone =  await radiov.selectyes;
       expect(selectyesdone).toBeTruthy(true);    
})

it("verify radiodisabled", async()=>{ 
    let radiodisabled =  await radiov.confirmlastfieldisdisabled();
     expect(radiodisabled).toBeFalsy(false);  
})



afterEach(async()=>{
    await browser.sleep(5000);
    await headerv.clicksignout();
})

    
});