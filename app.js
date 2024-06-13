// console.log('Hello B2S');

// create some constants which will be used later on to find out about th estructure of the workbook
const viz = document.getElementById("tableauViz");
let workbook;
let vizActiveSheet;
let dashboard;
let listSheets;

// create a function which will log information about the workbook
function logWorkbookInformation() {
  workbook = viz.workbook;
  console.log(`Thw workbook name is : "${workbook.name}"`);

  // find array of dashboard within the workbook
  let sheets = workbook.publishedSheetsInfo;
  sheets.forEach((element) => {
    index = element.index;
    console.log(`The sheet with index [${index}] is "${element.name}"`);
  });

  // find the active sheet
  vizActiveSheet = workbook.activeSheet;
  console.log(`The active sheet is "${vizActiveSheet.name}"`);

  // find array of sheets within dashboards
  listSheets = vizActiveSheet.worksheets;
  listSheets.forEach((element) => {
    index = element.index;
    console.log(`The worksheet with index [${index}] is "${element.name}"`);
  });
}

viz.addEventListener("firstinteractive", logWorkbookInformation);
