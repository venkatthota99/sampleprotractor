import { by, element, promise,  } from "protractor";
import { commonfunctions } from "../projbase/common/commonfunctions";


 export class table extends commonfunctions {

    sorttable = element(by.xpath("//table[contains(@class,'mat-sort table')]"));
    tablerows = element.all(by.xpath("//table[contains(@class,'mat-sort table')]/tr"));
    carbs = element(by.xpath("//div[text()='Carbs (g)']"));

    async findcount(){
      let  tablecount =  await  this.tablerows.count();
      await console.log(tablecount);
      return tablecount;
    }

    async getcolumndataandsort(column: number | promise.Promise<number>){
     let columndata =  await this.tablerows.map(async(ele,index)=>{
           let data =  await ele.$$('td').get(column);
           return await data.getText();
                     
      });
      let finalsorted = columndata.sort();
      console.log(finalsorted);
      return finalsorted;
      }
     
      async clickandgetcolumndata(column: number | promise.Promise<number>){
        await  this.carbs.click();
         let columndata1 = await this.tablerows.map(async(ele1,index)=>{
            let data1 = await ele1.$$('td').get(column);
            return await  data1.getText();
          });
          let finalsorted1 = columndata1;
          console.log(finalsorted1);
          return finalsorted1;
          
      }

 }