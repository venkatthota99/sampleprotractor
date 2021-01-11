import { browser } from "protractor";
import { header } from "../pages/headerpage";
import { login } from "../pages/loginpage";
import { selectauitab } from "../pages/selectauipage";
import { welcomeautomationpage } from "../pages/welcomeautomationpage";
import { welcomehomepage } from "../pages/welcomehomepage";




const loginv = new login(); 
const headerv = new header();
const welcomehomepagev = new welcomehomepage();
const welcomeautomationpagev = new welcomeautomationpage(); 
const selectauiv = new selectauitab();

describe("selectauitab suite",  ()=>{
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
      await welcomeautomationpagev.enterselectaui();
})

it("multiselect", async()=>{  
    await selectauiv.multiselectaui(); 
    
})

afterEach(async()=>{
    await browser.sleep(5000);
    await headerv.clicksignout();
})

    
});