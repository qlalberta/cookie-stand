'use strict';

//store given data in an array
//TODO: stored in one array for all three groups of data
var avgCookie = [['1st and Pike', 6.3], ['SeaTac Airport', 1.2], ['Seattle Center', 3.7], ['Capitol Hill', 2.3], ['Alki', 4.6]];
var minCustomer = [['1st and Pike', 23], ['SeaTac Airport', 3], ['Seattle Center', 11], ['Capitol Hill', 20], ['Alki', 2]];
var maxCustomer = [['1st and Pike', 65], ['SeaTac Airport', 24], ['Seattle Center', 38], ['Capitol Hill', 38], ['Alki', 16]];

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
  this.sum = 0;
  this.sumList = [];
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

//create prototype method getSum()
Sales.prototype.getSum = function () {
  for(var j = 0; j < 15; j++) {
    this.getSalesPerHourList();
    this.sum += this.salesPerHourList[j];
  }
};

//create prototype method render(); specify the function at the bottom
Sales.prototype.render = render;

// create new functions for the five locations
var pikeSales = new Sales(avgCookie[0][0],avgCookie[0][1],minCustomer[0][1],maxCustomer[0][1]);
pikeSales.getSales();
pikeSales.getSalesPerHourList();
pikeSales.getSum();

var airportSales = new Sales(avgCookie[1][0],avgCookie[1][1],minCustomer[1][1],maxCustomer[1][1]);
airportSales.getSales();
airportSales.getSalesPerHourList();
airportSales.getSum();

var seattleCenterSales = new Sales(avgCookie[0][0],avgCookie[2][1],minCustomer[2][1],maxCustomer[2][1]);
seattleCenterSales.getSales();
seattleCenterSales.getSalesPerHourList();
seattleCenterSales.getSum();

var capitalHillSales = new Sales(avgCookie[3][0],avgCookie[3][1],minCustomer[3][1],maxCustomer[3][1]);
capitalHillSales.getSales();
capitalHillSales.getSalesPerHourList();
capitalHillSales.getSum();

var alkiSales = new Sales(avgCookie[4][0],avgCookie[4][1],minCustomer[4][1],maxCustomer[4][1]);
alkiSales.getSales();
alkiSales.getSalesPerHourList();
alkiSales.getSum();

//store the hour output in an array
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

// generate the table on the browser
//create a table
var parentElement = document.getElementById('sales');
var article = document.createElement('article');
parentElement.appendChild(article);
var table = document.createElement('table');
article.appendChild(table);

// create the table header
var row_0 = document.createElement('tr');
table.appendChild(row_0);
for (var k = 0; k < hourList.length; k++) {
  var th = document.createElement('th');
  th.textContent = hourList[k];
  row_0.appendChild(th);
}

//other rows for sales from 5 locations.
function render () {
  var row_1 = document.createElement('tr');
  var td = document.createElement('td');
  td.textContent = this.location;
  row_1.appendChild(td);
  for (var l = 0; l < 15; l++) {
    td = document.createElement('td');
    td.textContent = this.salesPerHourList[l];
    row_1.appendChild(td);
  }
  table.appendChild(row_1);
}

pikeSales.render();
airportSales.render();
seattleCenterSales.render();
capitalHillSales.render();
alkiSales.render();

//TODO: Strech goal

//creater the table footer
// var row_2 = document.createElement('tr');
// var td = document.createElement('td');
// td.textContent = 'Totals';
// row_2.appendChild(td);
// for (var m = 0; m < 15; m++) {
//   td = document.createElement('td');
//   td.textContent = this.salesPerHourList;
//   row_2.appendChild(td);
// }
// table.appendChild(row_2);
