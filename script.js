//define data
var tabledata = [
  {
    id: 1,
    name: "Billy Bob",
    age: 12,
    gender: "male",
    height: 95,
    col: "red",
    dob: "14/05/2010",
  },
  {
    id: 2,
    name: "Jenny Jane",
    age: 42,
    gender: "female",
    height: 142,
    col: "blue",
    dob: "30/07/1954",
  },
  {
    id: 3,
    name: "Steve McAlistaire",
    age: 35,
    gender: "male",
    height: 176,
    col: "green",
    dob: "04/11/1982",
  },
  {
    id: 4,
    name: "Steve McAlistaire",
    age: 35,
    gender: "male",
    height: 176,
    col: "green",
    dob: "04/11/1982",
  },
  {
    id: 5,
    name: "Steve McAlistaire",
    age: 35,
    gender: "male",
    height: 176,
    col: "green",
    dob: "04/11/1982",
  },
  {
    id: 6,
    name: "Steve McAlistaire",
    age: 35,
    gender: "male",
    height: 176,
    col: "green",
    dob: "04/11/1982",
  },
];

const tableFormat = {
  height: 200,
  data: tabledata,
  layout: "fitColumns",
  paginationSize: 6,
  pagination: true,
  paginationSize: 10,
  paginationSizeSelector: [3, 25, 50, 100, true], //select list with an "all" option at the end of the list
  resizableColumnFit: true,
  selectable: true,
  columns: [
    {
      formatter: "rowSelection",
      titleFormatter: "rowSelection",
      hozAlign: "center",
      headerSort: false,
      width: 10,
      cellClick: function (e, cell) {
        console.log("e ", e);
        cell.getRow().toggleSelect();
      },
    },
    { title: "Name", field: "name", width: 200, resizable: true },
    { title: "Age", field: "age", resizable: true },
    { title: "Gender", field: "gender", resizable: true },
    { title: "Rating", field: "col", resizable: true },
    { title: "Favourite Color", field: "dob", resizable: true },
  ],
};
var table = new Tabulator("#example-table", tableFormat);
let select;
table.on("rowSelectionChanged", function (data, rows, selected, deselected) {
  //rows - array of row components for the currently selected rows in order of selection
  //data - array of data objects for the currently selected rows in order of selection
  //selected - array of row components that were selected in the last action
  //deselected - array of row components that were deselected in the last action
  console.log("selected ", selected, "deseleed ", deselected, rows);
});

/**
 * manual
 * table checkbox data can be select multiple{([1,2,3,4])} or single{(id)}
 * passing id of row
 */
// table.selectRow();
/**
 * table checkbox data can be select multiple{([1,2,3,4])} or single{(id)}
 * passing id of row
 */
// table.deselectRow();

let tabledata1 = [
  {
    id: 1,
    name: "somethign",
    age: 12,
    gender: "male",
    height: 95,
    col: "red",
    dob: "14/05/2010",
  },
  {
    id: 2,
    name: "something 2",
    age: 42,
    gender: "female",
    height: 142,
    col: "blue",
    dob: "30/07/1954",
  },
  {
    id: 3,
    name: "something 3",
    age: 35,
    gender: "male",
    height: 176,
    col: "green",
    dob: "04/11/1982",
  },
  {
    id: 4,
    name: "somthing 4",
    age: 35,
    gender: "male",
    height: 176,
    col: "green",
    dob: "04/11/1982",
  },
  {
    id: 5,
    name: "Something 5",
    age: 35,
    gender: "male",
    height: 176,
    col: "green",
    dob: "04/11/1982",
  },
  {
    id: 6,
    name: "Something 6",
    age: 35,
    gender: "male",
    height: 176,
    col: "green",
    dob: "04/11/1982",
  },
];

/**
 * set data for table
 */

//   table.setData(tabledata1);

class TableFormat {
  #tableObj;
  constructor(tableContainer, tabulatorObject) {
    this.#tableObj = new Tabulator(`#${tableContainer}`, tabulatorObject);
  }
  getTableObj() {
    return this.#tableObj;
  }
  setTableData(tableData) {
    this.#tableObj.setData(tableData);
  }

  /**
   manual
   * table checkbox data can be select multiple{([1,2,3,4])} or single{(id)}
   * passing id of row
   * @param {,1,2,3,[]} values of ids
   */
  selectCheckBoxs(values = []) {
    this.#tableObj.selectRow(values);
  }

  /**
   * table checkbox data can be select multiple{([1,2,3,4])} or single{(id)}
   * passing id of row
   *  @param {,1,2,3,[]} values of ids
   */
  deselectCheckBoxs(values = []) {
    this.#tableObj.deselectRow(values);
  }
}
