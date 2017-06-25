'use strict';

//store given data in an array
//TODO: stored in one array for all three groups of data
var avgCookie = [['1st and Pike', 6.3], ['SeaTac Airport', 1.2], ['Seattle Center', 3.7], ['Capitol Hill', 2.3], ['Alki', 4.6]];
var minCustomer = [['1st and Pike', 23], ['SeaTac Airport', 3], ['Seattle Center', 11], ['Capitol Hill', 20], ['Alki', 2]];
var maxCustomer = [['1st and Pike', 65], ['SeaTac Airport', 24], ['Seattle Center', 38], ['Capitol Hill', 38], ['Alki', 16]];
Location = [avgCookie[0][0], avgCookie[1][0], avgCookie[2][0], avgCookie[3][0]];
var columnNumber = 16;
//generate ranndom numbers of customer per hour
function randomCustomerNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//generate a constructor function for sales per location
function Sales (location, avgCookie, minCus, maxCus) {
  this.location = location;
  this.avgCookie = avgCookie;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.salesPerHourList = [];
}

//create prototype method getSales()
Sales.prototype.getSales = function () {
  this.sales = Math.floor(randomCustomerNumber(this.minCus, this.maxCus) * this.avgCookie);
};

// create prototype methodgetSalesPerHourList()
Sales.prototype.getSalesPerHourList = function () {
  for(var i = 0; i < 15; i++) {
    this.getSales();
    this.salesPerHourList[i] = this.sales;
  }
};

//create prototype method render(); specify the function at the bottom
Sales.prototype.renderRows = renderRows;

// create new functions for the five locations
var pikeSales = new Sales(avgCookie[0][0],avgCookie[0][1],minCustomer[0][1],maxCustomer[0][1]);
var airportSales = new Sales(avgCookie[1][0],avgCookie[1][1],minCustomer[1][1],maxCustomer[1][1]);
var seattleCenterSales =
  new Sales(avgCookie[2][0],avgCookie[2][1],minCustomer[2][1],maxCustomer[2][1]);
var capitalHillSales = new Sales(avgCookie[3][0],avgCookie[3][1],minCustomer[3][1],maxCustomer[3][1]);
var alkiSales = new Sales(avgCookie[4][0],avgCookie[4][1],minCustomer[4][1],maxCustomer[4][1]);

//store the hour output in an array hourList
function generateHourList () {
  var hourList = [''];
  var hourText = 6;
  var j = 6;
  for (j = 6; j < 21; j++) {
    if (hourText < 12) {
      hourList.push(hourText + 'am');
      hourText++;
    }
    else if (hourText == 12) {
      hourList.push(hourText + 'pm');
      hourText++;
    }
    else {
      hourText -= 12;
      hourList.push(hourText + 'pm');
      hourText += 12;
      hourText++;
    }
  }
  return hourList;
}

//create a function to generate the total sales per hour at each location
function generateTotalSales() {
  var totalSales = [];
  for(var k = 0; k < 15; k++) {
    totalSales[k] = pikeSales.salesPerHourList[k] + airportSales.salesPerHourList[k] + seattleCenterSales.salesPerHourList[k] + capitalHillSales.salesPerHourList[k] + alkiSales.salesPerHourList[k];
  }
  return totalSales;
}
//call functions to genernate salesPerHourLis and hourList
pikeSales.getSalesPerHourList();
airportSales.getSalesPerHourList();
seattleCenterSales.getSalesPerHourList();
capitalHillSales.getSalesPerHourList();
alkiSales.getSalesPerHourList();
var hourList = generateHourList();
var totalSales = generateTotalSales();

// create functions to display the table using calculated data
//create a table
function createTable() {
  var parentElement = document.getElementById('sales');
  var article = document.createElement('article');
  parentElement.appendChild(article);
  var table = document.createElement('table');
  article.appendChild(table);
  return table;
}

//create the table header
var table = createTable();
function createTableHeader() {
  var row_0 = document.createElement('tr');
  table.appendChild(row_0);
  for (var l = 0; l < columnNumber; l++) {
    var th = document.createElement('th');
    th.textContent = hourList[l];
    row_0.appendChild(th);
  }
  return row_0;
}

//function to disply other rows for sales from 5 locations.
function renderRows () {
  var row_1 = document.createElement('tr');
  table.appendChild(row_1);
  var td = document.createElement('td');
  td.textContent = this.location;
  row_1.appendChild(td);
  for (var l = 0; l < 15; l++) {
    td = document.createElement('td');
    td.textContent = this.salesPerHourList[l];
    row_1.appendChild(td);
  }
  return row_1;
}

//function to display the total sales
// var row_1 = renderRows();
function renderTotalSales() {
  var row_2 = document.createElement('tr');
  table.appendChild(row_2);
  var td = document.createElement('td');
  td.textContent = 'Totals';
  row_2.appendChild(td);
  for (var l = 0; l < 15; l++) {
    td = document.createElement('td');
    td.textContent = totalSales[l];
    row_2.appendChild(td);
  }
}
//call function to display the form
createTable();
createTableHeader();
pikeSales.renderRows();
airportSales.renderRows();
seattleCenterSales.renderRows();
capitalHillSales.renderRows();
alkiSales.renderRows();

// generate form from input and append it to the table
var salesForm = document.getElementById('addSalesForm');

salesForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var location = event.target.location.value;
  var avgCookie = parseInt(event.target.avgCookie.value);
  var minCustomer = parseInt(event.target.minCustomer.value);
  var maxCustomer = parseInt(event.target.maxCustomer.value);
  var newSales = new Sales(location, avgCookie, minCustomer, maxCustomer);
  // var totalSales = generateTotalSales();
  newSales.location = location;
  newSales.avgCookie = avgCookie;
  newSales.minCustomer = minCustomer;
  newSales.maxCustomer = maxCustomer;
  //validate the location
  for (var m = 0; m < Location.length; m++)
    if (newSales.location == Location[m]) {
      alert ('Please input a different location from what is in the table.');
    };
  newSales.getSalesPerHourList();
  newSales.renderRows();
  for (var ii = 0; ii < columnNumber; ii++) {
    totalSales[ii] += newSales.salesPerHourList[ii];
  }
  renderTotalSales();
  addSalesForm.reset();
});
