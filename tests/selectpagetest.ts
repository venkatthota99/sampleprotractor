import { browser } from "protractor";
import { button } from "../pages/buttonpage";
import { header } from "../pages/headerpage";
import { login } from "../pages/loginpage";
import { select } from "../pages/selectpage";
import { welcomeautomationpage } from "../pages/welcomeautomationpage";
import { welcomehomepage } from "../pages/welcomehomepage";


const loginv = new login(); 
const headerv = new header();
const welcomehomepagev = new welcomehomepage();
const welcomeautomationpagev = new welcomeautomationpage(); 
const selectv = new select();


describe("select page test", async()=>{

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
          await welcomeautomationpagev.enterselecttab(); 
    })

    it ("select dropdown by visual text", async ()=>{
        let fruitname = "Apple";
       let text =  await selectv.selectusingvisibletext(fruitname);
       expect(text).toBe("You have selected "+fruitname);
    })

    it ("dropdown is multiple or not", async()=>{
        let bool = await selectv.dropdownismultipleornot();
        expect(bool).toBeTruthy(true);
    })

    it ("select multiple dropdown", async()=>{
        await selectv.selectmultiplevalues();
        
    })

    it ("get options from dropdown", async()=>{
       let list = await selectv.getalloptions();
        console.log(list);
    })

    afterEach(async()=>{
        await browser.sleep(5000);
        await headerv.clicksignout();
    })

})