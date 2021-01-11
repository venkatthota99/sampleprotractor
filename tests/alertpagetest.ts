import { browser } from "protractor";
import { alertpage } from "../pages/alertpage";
import { header } from "../pages/headerpage";
import { login } from "../pages/loginpage";
import { welcomeautomationpage } from "../pages/welcomeautomationpage";
import { welcomehomepage } from "../pages/welcomehomepage";

const loginv = new login(); 
const headerv = new header();
const welcomehomepagev = new welcomehomepage();
const welcomeautomationpagev = new welcomeautomationpage(); 
const alertpagev = new alertpage();

describe("alerttab suite",  ()=>{
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
      await welcomeautomationpagev.enteralerttab(); 
})

it("acceptalert", async()=>{    
    await alertpagev.simpleacceptalert();
    
})

it("confirmacceptalert", async()=>{    
    let alerttext = await alertpagev.confirmacceptalert();
    expect(alerttext).toBe("Are you happy with LetCode")
    //second comment
})

it("promptalert", async()=>{    
     await alertpagev.promptsendkeysalert();
    
})

it("modernalert", async()=>{    
     await alertpagev.modernacceptalert();
    
})


afterEach(async()=>{
    await browser.sleep(5000);
    await headerv.clicksignout();
})

    
});