require('chromedriver')
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var protractor = require('protractor');
var plugins_1 = require('protractor/built/plugins.js')

function CustomWorld() {

	driver = new seleniumWebdriver.Builder().forBrowser('chrome');
	this.browser = new protractor.ProtractorBrowser(driver.build());
	this.browser.plugins_ = new plugins_1.Plugins({});
	this.browser.manage().window().maximize();
	this.browser.waitForAngularEnabled(false);
}

defineSupportCode(function({
	setWorldConstructor
}) {
	setWorldConstructor(CustomWorld)
})

defineSupportCode(function({
	setDefaultTimeout
}) {
	setDefaultTimeout(60 * 1000);
});
