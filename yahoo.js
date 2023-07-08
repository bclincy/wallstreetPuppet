const puppeteer = require('puppeteer');
const fs = require('fs-extra');

(async function main() {
    try {

        async function getData (url, selector){
            const browser = await puppeteer.launch({headless: true});
            const page = await browser.newPage();
            page.setRequestInterception(true);
            page.on('request', async request => {
                console.log(await request.url())
                request.continue();
            });
            await page.goto(url, {waitUntil: 'domcontentloaded'});
            await page.waitForSelector(selector)

            return page.content();
        }
        
        console.log(await getData('https://finance.yahoo.com/quote/AAPL/history?p=AAPL', '#Col1-1-HistoricalDataTable-Proxy > section > div > table' ));
        // const browser = await puppeteer.launch({headless: true});
        // const page = await browser.newPage();
        // page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36');

        // await page.goto('https://experts.shopify.com');
        // await page.waitForSelector('.section');
    } catch (error) {
        console.log('our error', e)
    }
})();