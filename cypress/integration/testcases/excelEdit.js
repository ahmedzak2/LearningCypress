const cypress = require('cypress');
const ExcelJs= require('exceljs');

// object created for class 
async function excelTest(searchText,replaceText,change,filePath,sheetNumber){
    
const workBook=  new ExcelJs.Workbook();
await workBook.xlsx.readFile(filePath)


const workSheet= workBook.getWorksheet(sheetNumber);
 const output= await readExcel(workSheet,searchText);
  
//  const cell = workSheet.getCell(3,3)
//         cell.value=replaceText
//       await  workBook.xlsx.writeFile(filePath)
const cell = workSheet.getCell(output.row,output.column);
cell.value = replaceText;
await workBook.xlsx.writeFile(filePath);

const cell2 = workSheet.getCell(output.row,output.column+change.colChange);
cell.value2 = 350;
await workBook.xlsx.writeFile(filePath);
   

}

    async function readExcel(worksheet,searchText)
{
    let output = {row:-1,column:-1};
    worksheet.eachRow((row,rowNumber) =>
    {
          row.eachCell((cell,colNumber) =>
          {
              if(cell.value === searchText)
              {
                  output.row=rowNumber;
                  output.column=colNumber;
              }
  
  
          }  )
    
    })
    return output;
}
excelTest("ah3Ip","ah3Ip",{rowChange:0,colChange:1},"D:/zaiko courses/final project UTW/2.light/light_excel_sheet.xlsx","Sheet1")
