const puppeteer = require('puppeteer');
const fs = require('fs-extra');

(async function main() {
    try {

        async function getData (url, selector){
            const browser = await puppeteer.launch({headless: true});
             const page = await browser.newPage();
            await page.goto(url, {waitUntil: 'domcontentloaded'});
            await page.waitForSelector(selector);
            const table = await page.$$(selector);
            const link = await page.$x('//*[@id="Col1-1-HistoricalDataTable-Proxy"]/section/div[1]/div[2]/span[2]');
            //get data and link for data gathering
            console.log( await table[0].$eval('tbody', tbody => tbody.outerText));
            console.log( await link[0].$eval('a', a => a.href));
            // for (const data of table) {
            //     const tdata = await data.$('tbody');
            //     console.log(await data.$eval('tbody', tbody => tbody.outerText ));
            // }

            browser.close();
            return 'yes I made it';
        }

        async function downLoadCsv (downloadUrl) {
            await page.evaluate(async downloadUrl => {
                const fetchResp = await fetch(downloadCsvUrl, {credentials: 'include'});
                return await fetchResp.text();
              }, downloadUrl);
        }
        console.log(await getData('https://finance.yahoo.com/quote/AAPL/history?p=AAPL', '#Col1-1-HistoricalDataTable-Proxy > section > div > table' ));

    } catch (e) {
        console.log('our error', e)
    }
    await console.log()
})();