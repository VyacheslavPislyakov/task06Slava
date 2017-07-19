var seleniumWebdriver = require('selenium-webdriver');
var protractor = require('protractor');
// var plugins_1 = require('protractor/built/plugins.js');
var by = new protractor.ProtractorBy();
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
	Given('I am going to the Onliner.by', function() {
		// return this.browser.driver.get('https://www.onliner.by/');
		return this.browser.get('https://www.onliner.by/');
	});

	When('I click on mobile phones', function() {
		var xpath1 = '//*[@id="container"]/div/div[2]/div/div/div[1]/div/div[1]/ul/li[1]/a/span/span';
		return this.browser.element(by.xpath(xpath1)).click();
	});
});
