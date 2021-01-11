import { browser } from "protractor"
import { header } from "../pages/headerpage";
import { login } from "../pages/loginpage";
import { table } from "../pages/tablepage";
import { welcomeautomationpage } from "../pages/welcomeautomationpage";
import { welcomehomepage } from "../pages/welcomehomepage";

const loginv = new login(); 
const headerv = new header();
const welcomehomepagev = new welcomehomepage();
const welcomeautomationpagev = new welcomeautomationpage(); 
const tablepagev = new table();
describe("tablepage suite",  ()=>{
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
})

it ("sorttable validation", async()=>{

    await welcomehomepagev.entertestingpractice();
    await welcomeautomationpagev.entersimpletable();
    let count = await tablepagev.findcount();
    expect(count).toBe(5);
    expect(await tablepagev.getcolumndataandsort(3)).toEqual(await tablepagev.clickandgetcolumndata(3));  

});

});