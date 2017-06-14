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
  this.hour = '';
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

// create new functions for the five locations
var pikeSales = new Sales(avgCookie[0][0],avgCookie[0][1],minCustomer[0][1],maxCustomer[0][1]);
pikeSales.getSales();
pikeSales.getSalesPerHourList();
pikeSales.getSum();
// pikeSales.render();

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
//The table should have
// hour
// number of cookies-per hour and total
// get (from the DOM) who the parent element is going to be. where am I attaching this new element

//create a table
var parentElement = document.getElementById('sales');
var article = document.createElement('article');
parentElement.appendChild(article);
var table = document.createElement('table');
article.appendChild(table);

// table.prototype.render = render;
// create the table header
var row = document.createElement('tr');
table.appendChild(row);
for (var k = 0; k < hourList.length; k++) {
  var th = document.createElement('th');
  console.log(hourList[k]);
  th.textContent = hourList[k];
  row.appendChild(th);
// }
//
// function render () {
//
// }

// reader_header();
// var parentElement = document.getElementById('sales');
// var article = document.createElement('article');
// parentElement.appendChild(article);
// var h2_1 = document.createElement('h2');
// article.appendChild(h2_1);
// h2_1.textContent = avgCookie[0][0];
// var ul_1 = document.createElement('ul');
// article.appendChild(ul_1);
//
// for (var n = 0; n < 16; n++) {
//   var li_1 = document.createElement('li');
//   ul_1.appendChild(li_1);
//   if (n != 15 ) {
//     li_1.textContent = hourList[n] + ': ' + pikeSalesPerHourList[n] + ' cookies';
//   } else {
//     li_1.textContent = 'Total: ' + pikeSum + ' cookies';
//   }
// }
//
// var h2_2 = document.createElement('h2');
// article.appendChild(h2_2);
// h2_2.textContent = avgCookie[1][0];
// var ul_2 = document.createElement('ul');
// article.appendChild(ul_2);
//
// for (var o = 0; o < 16; o++) {
//   var li_2 = document.createElement('li');
//   ul_2.appendChild(li_2);
//   if (o != 15 ) {
//     li_2.textContent = hourList[o] + ': ' + airportSalesPerHourList[o] + ' cookies';
//   } else {
//     li_2.textContent = 'Total: ' + airportSum + ' cookies';
//   }
// }
//
// var h2_3 = document.createElement('h2');
// article.appendChild(h2_3);
// h2_3.textContent = avgCookie[2][0];
// var ul_3 = document.createElement('ul');
// article.appendChild(ul_3);
//
// for (var p = 0; p < 16; p++) {
//   var li_3 = document.createElement('li');
//   ul_3.appendChild(li_3);
//   if (p != 15 ) {
//     li_3.textContent = hourList[p] + ': ' + seattleCenterSalesPerHourList[p] + ' cookies';
//   } else {
//     li_3.textContent = 'Total: ' + seattleCenterSum + ' cookies';
//   }
// }
//
// var h2_4 = document.createElement('h2');
// article.appendChild(h2_4);
// h2_4.textContent = avgCookie[3][0];
// var ul_4 = document.createElement('ul');
// article.appendChild(ul_4);
//
// for (var q = 0; q < 16; q++) {
//   var li_4 = document.createElement('li');
//   ul_4.appendChild(li_4);
//   if (q != 15 ) {
//     li_4.textContent = hourList[q] + ': ' + capitalHillSalesPerHourList[q] + ' cookies';
//   } else {
//     li_4.textContent = 'Total: ' + capitalHillSum + ' cookies';
//   }
// }
//
// var h2_5 = document.createElement('h2');
// article.appendChild(h2_5);
// h2_5.textContent = avgCookie[4][0];
// var ul_5 = document.createElement('ul');
// article.appendChild(ul_5);
//
// for (var r = 0; r < 16; r++) {
//   var li_5 = document.createElement('li');
//   ul_5.appendChild(li_5);
//   if (r != 15 ) {
//     li_5.textContent = hourList[r] + ': ' + alkiSalesPerHourList[r] + ' cookies';
//   } else {
//     li_5.textContent = 'Total: ' + alkiSum + ' cookies';
//   }
// }
