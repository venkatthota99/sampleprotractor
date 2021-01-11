import { by, element } from "protractor";
import { commonfunctions } from "../projbase/common/commonfunctions";

export class button extends commonfunctions {

  xyelement = element(by.id("position"));
  colorelement = element(by.id("color"));
  heightelement = element(by.id("property"));


async getxcoordinates(){
   //let locationpoint =  await this.click(this.xyelement);
   let point = await this.xyelement.getLocation();
   let xcord = await point.x;
   console.log(xcord);
   return xcord;
}

async getycoordinates(){
    //let locationpoint =  await this.click(this.xyelement);
    let point = await this.xyelement.getLocation();
    let ycord = await point.y;
    console.log(ycord);
    return ycord;
 }

async getcolorofthebutton(){
let color = await this.colorelement.getCssValue("color");
console.log(color);
return color;
}

async getheightandwidth(){
   let size = await this.heightelement.getSize();
   return size;

}



}