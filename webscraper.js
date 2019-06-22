const request = require('request promise');
const cheerio = require('cheerio');
//Parses through text for dates, times, numbers, emails, places
var kwnl = require('./knwl.js')
var knwlInstance = new knwl;

//Email address used for web scraping
var emailAddress = 'tim@canddi.com'

//Remove the local part of the email address, leaving the domain
var emailLink = emailAddress.substring(email.lastIndexOf("@") + 1);

//Using request, access the website through the domain
request('emailLink', (error, response, html) => 
{
	if(!error && response.statusCode == 200)
	{
		const $ = cheerio.load(html);
	}
	else
		console.log("Unable to locate website");
});

//Using knwl, gather all the written data from the website for the function
knwlInstance.init("$")

//Function will seek out specified information (emails, numbers etc) from the website
function retrieveData() 
{
	knwlInstance.get('emails');
	knwlInstance.get('numbers');
	knwlInstance.get('places');
}

//Display the specified data in the console
console.log(retrieveData());