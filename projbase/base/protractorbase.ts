import { platform } from "os";
import { browser, by, ElementFinder, promise, ProtractorExpectedConditions } from "protractor";
import { protractor } from "protractor/built/ptor";
import { select } from "../../pages/selectpage";

export class ProtractorBase {

    private ec :ProtractorExpectedConditions = browser.ExpectedConditions;
    private timeOut = 30000;

    /**
     * @description : This function is used to do click action
     * @param element :element on which click action will be performed
     */

  public async click(element:ElementFinder){
      await browser.wait(this.ec.elementToBeClickable(element),this.timeOut, "Failed to click the element")
      await element.click()
  }

     /**
     * @description : This function is used to do append data
     * @param element :pass the element locator
     * @param testdata: Data to be typed on the element
     */

   public async type(element:ElementFinder, testdata:string){
    await browser.wait(this.ec.visibilityOf(element),this.timeOut, "element not visible");
    await element.sendKeys(testdata);
    }

      /**
     * @description : This function is used to do clear and append data
     * @param element :element on which click action will be performed
     * @param testdata: Data to be typed on the element
     */

    public async clearandtype(element:ElementFinder, testdata:string){
        await browser.wait(this.ec.visibilityOf(element),this.timeOut, "element not visible");
        await element.clear();
        await element.sendKeys(testdata);
        }

    public async assertText(element:ElementFinder, expectedtext:string){
        await browser.wait(this.ec.visibilityOf(element),this.timeOut, "element not visible");
        let actualtext = await element.getText();
        expect(actualtext.trim()).toBe(expectedtext);

    }

    public async assertTrue(element:ElementFinder){
        await browser.wait(this.ec.visibilityOf(element),this.timeOut, "element not visible");
        expect(await element.isDisplayed()).toBe(true);
    }

    public async assertFalse(element:ElementFinder){
        await browser.wait(this.ec.visibilityOf(element),this.timeOut, "element not visible");
        expect(await element.isDisplayed()).toBe(false);
    }

    public async acceptAlert(){
        await browser.wait(this.ec.alertIsPresent(), this.timeOut, "Alert is not present");
        await (await browser.switchTo().alert()).accept();
    }

    public async dismissAlert(){
        await browser.wait(this.ec.alertIsPresent(), this.timeOut, "Alert is not present");
        await (await browser.switchTo().alert()).dismiss();
    }

    public async typeInAlert(alertdata : string){
        await browser.wait(this.ec.alertIsPresent(), this.timeOut, "Alert is not present");
        await (await browser.switchTo().alert()).sendKeys(alertdata);
    }

    public async getTextFromAlert(): Promise<string>{
        await browser.wait(this.ec.alertIsPresent(), this.timeOut, "Alert is not present");
        let alerttext = await (await browser.switchTo().alert()).getText();
        return alerttext;
    }

    public async switchToFrame(framenumber:number){
        await browser.switchTo().frame(framenumber);
    }

    public async typeAndTab(element:ElementFinder, testdata:string){
        await browser.wait(this.ec.visibilityOf(element),this.timeOut, "element not visible");
       // await element.clear();
        await element.sendKeys(testdata, protractor.Key.TAB);
        }
    public async typeAndEnter(element:ElementFinder, testdata:string){
            let capabilities = await browser.getCapabilities();
            let platform = await capabilities.get('platform');
            await browser.wait(this.ec.visibilityOf(element),this.timeOut, "element not visible");
            await element.clear();
            if (platform == 'Mac OS X')
            {
             await element.sendKeys(testdata, protractor.Key.RETURN);
            }
            else
            {
            await element.sendKeys(testdata, protractor.Key.ENTER);
            }
        }
    public async  mouseHoverAndClick(element:ElementFinder){
            await browser.wait(this.ec.visibilityOf(element),this.timeOut, "element not visible");
            await browser.actions().mouseMove(await element.getWebElement())
            .click()
            .perform();
        }
    public async  mouseHover(element:ElementFinder){
            await browser.wait(this.ec.visibilityOf(element),this.timeOut, "element not visible");
            await browser.actions().mouseMove(await element.getWebElement())
            .perform();
        }
       
    public async clear(element:ElementFinder){
            await browser.wait(this.ec.visibilityOf(element),this.timeOut, "element not visible");
            await element.clear();
            }

    public async isenabled(element:ElementFinder){
                await browser.wait(this.ec.visibilityOf(element),this.timeOut, "element not visible");
                await element.isEnabled();
                }

    public async selectdropdownbyvisibletext(dropdownelement:ElementFinder, visibletext:string){
        await browser.wait(this.ec.visibilityOf(dropdownelement),this.timeOut, "element not visible");
        await dropdownelement.click();
        await dropdownelement.element(by.xpath("//option[text()='"+visibletext+"']")).click();
        }
    public async selectdropdownbyvalue(dropdownelement:ElementFinder, valuetext:string){
        await browser.wait(this.ec.visibilityOf(dropdownelement),this.timeOut, "element not visible");
        await dropdownelement.click();
        await dropdownelement.element(by.xpath("//*[@value='"+valuetext+"']")).click();
            }
    public async selectdropdown(dropdownelement:ElementFinder){
        await browser.wait(this.ec.visibilityOf(dropdownelement),this.timeOut, "element not visible");
        await dropdownelement.click();
        }
}