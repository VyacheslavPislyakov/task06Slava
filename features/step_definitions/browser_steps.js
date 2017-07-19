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

	When('I click on {stringInDoubleQuotes}', function(text) {
		var xpath1 = '//*[@id="container"]/div/div[2]/div/div/div[1]/div/div[1]/ul/li[1]/a/span/span';
		return this.browser.element(by.xpath(xpath1)).then(function(element) {
            return element.click();
        });
	});

	When('I click to phone', function() {
		var cssSel = "ul.catalog-bar__list > li:nth-child(1) > a";
		return element(by.css(cssSel)).then(function(element) {
            return element.click();
        });
	});
});
