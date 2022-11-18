const { alertIsPresent } = require('wdio-wait-for');

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://www.demoblaze.com/index.html${path}`)
    }

    isAlert() {
        browser.waitUntil(alertIsPresent(), {
            timeout: 5000, timeoutMsg: 'Failed, after waiting for the alert to be present'
        })
    }
}
