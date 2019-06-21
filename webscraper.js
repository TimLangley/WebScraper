const request = require('request promise');
const cheerio = require('cheerio');
//Parses through text for dates, times, numbers, emails, places
var kwnl = require('./knwl.js')
var knwlInstance = new knwl;

//Access website from email address

//Using require, access the website

//Using knwl, gather all the written data for the function
knwlInstance.init("websitedatafromrequire")

//Function will seek out specified information (emails, numbers etc) from the string
function retrieveData() 
{
	knwlInstance.get('emails')
	knwlInstance.get('numbers')
	knwlInstance.get('places')
}

//Display the specified data in the console
console.log(retrieveData());