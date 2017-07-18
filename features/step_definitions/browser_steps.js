var seleniumWebdriver = require('selenium-webdriver');
var protractor = require('protractor');
var plugins_1 = require('protractor/built/plugins.js')
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
    Given('I am going to the Onliner.by', function() {
        // return this.browser.driver.get('https://www.onliner.by/');
        return this.browser.get('https://www.onliner.by/');
    });

    When('I click on {stringInDoubleQuotes}', function (text) {
        // console.log(text);
        var xpath = "//*[contains(text(),'" + text + "')]";
        // return this.browser.driver.findElement({xpath: xpath}).then(function(element) {
        //     return element.click();
        // });
        return this.browser.element(by.css('//*[contains(text(),' + text + ')]')).then(function(element) {
            return element.click();
        });
    });

    When('I click to phone', function () {
        var cssSel = "ul.catalog-bar__list > li:nth-child(1) > a";
        return this.browser.driver.findElement({css: cssSel}).then(function(element) {
            return element.click();
        });
    });




});
