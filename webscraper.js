const rp = require('request-promise');
const cheerio = require('cheerio');
var Knwl = require('knwl.js');
var knwlInstance = new Knwl('english');

//The information we will be gathering using Knwl
var emails = [];
var phones = [];
var places = [];
var links = [];

//Email address used for web scraping
var emailAddress = 'tim@canddi.com'

//Remove the local part of the email address, leaving the domain
var emailLink = emailAddress.substring(emailAddress.lastIndexOf("@") + 1);

//Complete the url to be searched
var url = ('https://www.' + emailLink);

rp(url)
	.then(function(html)
	{
		//Url is successful, begin to scrape for information
		console.log("Website successfully found!");

		const $ = cheerio.load(html);
		knwlInstance.init($(html));

		//Retrieve the information from the html
		emails = knwlInstance.get('emails');
		phones = knwlInstance.get('phones');
		places = knwlInstance.get('places');
		links = knwlInstance.get('links');

		//Log the information gathered
		//console.log(html);
		console.log(emails);
		console.log(phones);
		console.log(places);
		console.log(links);
	})
	.catch(function(err)
	{
		//Unable to location the website, display in error in console + url
		console.log("Unable to locate website");
		console.log(url);
		console.log(err);
	});