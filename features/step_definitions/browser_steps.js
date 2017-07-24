const URL = 'https://www.onliner.by/';
var seleniumWebdriver = require('selenium-webdriver');
var assert = require('chai').assert;
var protractor = require('protractor');
var by = new protractor.ProtractorBy();
var {defineSupportCode} = require('cucumber');
var EC = new protractor.ProtractorExpectedConditions();

var locatorMobilePhones = '.project-navigation__sign';
var locatorFilterTag = 'div.schema-tags__item > span';
var locatorToComparePage = 'a.compare-button__sub.compare-button__sub_main';
var locatorAdvantageS6 = 'td:nth-child(3).product-table__cell.product-table__cell_accent';
var locatorAdvantageSE = 'td:nth-child(4).product-table__cell.product-table__cell_accent';
var assertText = 'Возможно перепутали телефоны. У Iphone 6S Больше плюсов чем у Iphone SE';
var locatorRemovedPhone = '#product-table > tbody:nth-child(2) > tr > th:nth-child(4) > div > a';


defineSupportCode(function({Given, When, Then}) {
	Given('I am going to the Onliner.by', function() {
		return this.browser.get(URL);
	});

	When('Click on {stringInDoubleQuotes}', function(text) {
		return this.browser.element(by.cssContainingText(locatorMobilePhones, text)).click();
	});

	When('I set filter {stringInDoubleQuotes}', function(text) {
		let el = this.browser.element.all(by.cssContainingText('span', text)).first();
		this.browser.executeScript("arguments[0].scrollIntoView();", el)
		.then(() => {
			return el.click();
		});
	});

	When('Should have been shown set filter {stringInDoubleQuotes}', function(text) {
		let condition = this.browser.element(by.cssContainingText(locatorFilterTag, text));
		return this.browser.wait(EC.presenceOf(condition), 5000);
	});

	When('I find {stringInDoubleQuotes}', function(text) {
		var wantedElement = this.browser.element(by.cssContainingText('span', text));
		this.browser.wait(EC.elementToBeClickable(wantedElement), 5000)
		.then(() => {
			this.browser.executeScript("arguments[0].scrollIntoView();", wantedElement);
		})
		.then(() => {
			return wantedElement.click();
		});
	});

	Then('Should have been set {stringInDoubleQuotes}', function (text) {
		return this.browser.element(by.cssContainingText('h1', text));
	});

	When('Click {stringInDoubleQuotes} to compare phone', function(text) {
		return this.browser.element(by.cssContainingText('span', text)).click();
	});

	Then('Should have been set compare {stringInDoubleQuotes}', function (text) {
		return this.browser.element(by.cssContainingText('a', text));
	});

	When('Come back to mobile page', function() {
		return this.browser.navigate().back();
	});

	When('Going to compare page', function() {
		return this.browser.element.all(by.css(locatorToComparePage)).first().click();
	});

	Then('Compare all function of phones', function () {
		let res6S = 0;
		let resSE = 0;
		this.browser.executeScript('window.scrollTo(0, document.body.scrollHeight)');
		this.browser.element.all(by.css(locatorAdvantageS6)).count()
		.then(result => {
			res6S = result;
		})
		.then(() => {
			this.browser.element.all(by.css(locatorAdvantageSE)).count().then(res => {
				resSE = res;
			})
		})
		.then(() => {
			assert.isAbove(res6S, resSE, assertText);
		});
	});

	When('Delete iPhone SE', function () {
		var ele = this.browser.element(by.css(locatorRemovedPhone));
		this.browser.wait(EC.visibilityOf(ele), 5000)
		.then(() => {
			return ele.click();
		});
	});

	Then('Verify that {stringInDoubleQuotes} has been removed', function (text) {
		var elem = this.browser.element.all(by.cssContainingText('span', text)).first();
		return this.browser.wait(EC.invisibilityOf(elem));
	});

});
