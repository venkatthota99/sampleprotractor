import { table } from "console";
import { browser } from "protractor";
import { threadId } from "worker_threads";
import { header } from "../pages/headerpage";
import { inputtab } from "../pages/inputab";
import { login } from "../pages/loginpage";
import { welcomeautomationpage } from "../pages/welcomeautomationpage";
import { welcomehomepage } from "../pages/welcomehomepage";

const loginv = new login(); 
const headerv = new header();
const welcomehomepagev = new welcomehomepage();
const welcomeautomationpagev = new welcomeautomationpage(); 
const inputtabv = new inputtab();
describe("Inputtab suite",  ()=>{
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
      await welcomeautomationpagev.enterinputtab(); 
})

it("enterfullname", async()=>{
   await inputtabv.enteryourfullname("venkateswararao");
   
});

it("join and press tab", async()=>{
    await inputtabv.joinword("Thota");
})

it("get text using get attribute", async()=>{
   let text =  await inputtabv.getattributefrominput();
    await expect(text).toBe("ortonikc");
})

it("clear text", async()=>{
    await inputtabv.clearfield();
})

it("is disabled verify", async()=>{
    expect(inputtabv.fielddisabled()).toBeFalsy(false);
})

afterEach(async()=>{
    await browser.sleep(5000);
    await headerv.clicksignout();
})



});