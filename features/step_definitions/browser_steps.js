var seleniumWebdriver = require('selenium-webdriver');
var protractor = require('protractor');
// var plugins_1 = require('protractor/built/plugins.js');
var by = new protractor.ProtractorBy();
var {defineSupportCode} = require('cucumber');
var EC = new protractor.ProtractorExpectedConditions();

defineSupportCode(function({Given, When, Then}) {

	Given('I am going to the Onliner.by', function() {
		return this.browser.get('https://www.onliner.by/');
	});

	When('I click on mobile phones', function() {
		let locator = '.project-navigation__sign';
		let text = 'Мобильные телефоны'
		return this.browser.element(by.cssContainingText(locator, text)).click();
	});

	When('I set filter Apple', function() {
		let locator = '.schema-filter__checkbox-text';
		let text = 'Apple';
		return this.browser.element.all(by.cssContainingText('span', text)).first().click();
	});

	When('Valid set filter {stringInDoubleQuotes}', function(text) {
		var condition = this.browser.element(by.cssContainingText('div.schema-tags__item > span', text));
		return this.browser.wait(EC.presenceOf(condition), 5000);
	});

	When('I find {stringInDoubleQuotes}', function(text) {
		var wantedElement = this.browser.element(by.cssContainingText('span', text));
		this.browser.wait(EC.elementToBeClickable(wantedElement), 5000);
		this.browser.executeScript("arguments[0].scrollIntoView();", wantedElement);
		return wantedElement.click();
	});

	When('Come back to mobile page', function() {
		return this.browser.navigate().back();
	})

	When('Click add to compare phone', function() {
		return this.browser.element(by.cssContainingText('span', 'Добавить к сравнению')).click();
	});

	When('Going to compare page', function() {
		this.browser.element.all(by.css('a.compare-button__sub.compare-button__sub_main')).first().click();
		return this.browser.sleep(5000);
	})

});
