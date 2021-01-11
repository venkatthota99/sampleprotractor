import { by, element, ElementFinder } from "protractor";
import { commonfunctions } from "../projbase/common/commonfunctions";


export class select extends commonfunctions {

fruitselement = element(by.id("fruits"));
fruitpopup = element(by.xpath("(//p[@class='subtitle'])[1]"));
superheros = element(by.id("superheros"));


async selectusingvisibletext(fruitname){
     await this.selectdropdownbyvisibletext(this.fruitselement,fruitname);
    let text =  await this.fruitpopup.getText();  
    return text; 
}

async dropdownismultipleornot(){
   let bool= await this.superheros.getAttribute("multiple");
   console.log(bool);
   return bool;
}

async selectmultiplevalues(){
     await this.superheros.element(by.xpath("//option[text()='Ant-Man']")).click();
     await this.superheros.element(by.xpath("//*[@value='aq']")).click();
     
}

async getalloptions(){
   let list = await this.superheros.element(by.xpath("//*[@id='superheros']/option"));
   return list;
}





}