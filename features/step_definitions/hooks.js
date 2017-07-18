var {defineSupportCode} = require('cucumber');

defineSupportCode(function({After}) {
	After(function() {
	console.log("After hook");
	return this.browser.driver.quit();
	});
});

defineSupportCode(function({Before}) {
	Before(function() {
	console.log("Before hook");
	return 1;
	});
});
