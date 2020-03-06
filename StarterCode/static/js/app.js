// from data.js
var tableData = data;

// YOUR CODE HERE!
table = d3.select("tbody");


// Building the UFO sightings table
function buildTable(tableData){
    // Start by clearing table on page
    table.html("");
    // Looping through data.js and appending to table 
    tableData.forEach((entry) => {row = table.append("tr");
            Object.values(entry).forEach((value) => {cell = row.append("td");
            cell.text(value);
        });
    })
}
// Event to trigger a function on button click
function buttonClick(){
    date = d3.select("#datetime").property("value");
    filterData = tableData;
    

    // Filter data using input date;
    if(date) {
        // Apply Filter to the table data to only keep relevant date rows 
        filterData = filterData.filter((row) => row.datetime === date);
    } 
    // Build table with filtered data
    buildTable(filterData); 
    
}
// Function to attach an event to filter button click
d3.select("#filter-btn").on("click", buttonClick);
// Build table with data.js
buildTable(tableData);

// Function to attach an event to reset button click

var clearEntries = d3.select("#reset-btn");
clearEntries.on("click", function() {
  location.reload();
});

