import { browser } from "protractor";
import { button } from "../pages/buttonpage";
import { header } from "../pages/headerpage";
import { inputtab } from "../pages/inputab";
import { login } from "../pages/loginpage";
import { welcomeautomationpage } from "../pages/welcomeautomationpage";
import { welcomehomepage } from "../pages/welcomehomepage";


const loginv = new login(); 
const headerv = new header();
const welcomehomepagev = new welcomehomepage();
const welcomeautomationpagev = new welcomeautomationpage(); 
const buttonv = new button();
describe("buttontab suite",  ()=>{
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
      await welcomeautomationpagev.enterbuttontab(); 
})

it("getxycoordinates", async()=>{
    
    let x = await buttonv.getxcoordinates();
    let y = await buttonv.getycoordinates();
    expect(x).toBe(56);
    expect(y).toBe(373);

})

it("find the color of the button", async()=>{
   let color =  await buttonv.getcolorofthebutton();
   expect(color).toBe("rgba(255, 255, 255, 1)");

})

it("get height and width of the button", async()=>{
    let size = await buttonv.getheightandwidth();
    let height = size.height;
    console.log(height);
    let width = size.width;
    console.log(width);
    expect(height).toBe(40);
    expect(width).toBe(1170);
})



afterEach(async()=>{
    await browser.sleep(5000);
    await headerv.clicksignout();
})

    
 });