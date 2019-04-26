
// from data.js
var tableData = data;

function showData(tableData) {
  // return tableData.datetime = "1/10/2010";
};

// Select the table body
  var tbody = d3.select("tbody");

// add filtered data to table on webpage
  tableData.forEach(function(table_values) {
  // console.log(filteredData);
  var row = tbody.append("tr");
  Object.entries(table_values).forEach(function([key,value]) {
      // console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = tbody.append("td");
      cell.text(value);
    });
  });


// INITIALIZING EVENT LISTENERS
// Button event listener
var button = d3.select("#filter-btn");

button.on("click", function() {
  d3.event.preventDefault();
  var inputField = d3.select("#datetime").property("value");
  console.log(inputField);

  function filterTable(tableData) {
    return tableData.datetime = inputField;
  };
  // console.log(filteredData)
  // Select the table body
  var tbody = d3.select("tbody");
  tbody.html("");

  var filteredData = tableData.filter(filterTable);
  console.log(filteredData);

  filteredData.forEach(function(filteredRow) {
  var row = tbody.append("tr");
  Object.entries(filteredRow).forEach(function([key,value]) {
      // console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
});


// FILTERING
// Start with filtering data and printing it out on the console
function filterTable(tableData) {
  return tableData.datetime = "1/10/2010";
};


var dropDown = d3.select("#selDataset");

function optionChanged(data) {
  return tableData.data = inputField;

  console.log(data);
}