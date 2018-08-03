const puppeteer = require('puppeteer');
const fs = require('fs-extra');

(async function main() {
    try {

        async function getData (url, selector){
            const browser = await puppeteer.launch({headless: true});
            const page = await browser.newPage();
            await page.goto(url, {waitUntil: 'domcontentloaded'});
            await page.waitForSelector(selector);
            const data = await page.$$(selector);
            const link = await page.$x('//*[@id="Col1-1-HistoricalDataTable-Proxy"]/section/div[1]/div[2]/span[2]/a');
            const linkData = await page.evaluate( data => data.outerText, data); 
            console.log(linkData);
            // return page.content();
            browser.close;
            return data[0].outerText;
        }

        async function downLoadCsv (downloadUrl) {
            await page.evaluate(async downloadUrl => {
                const fetchResp = await fetch(downloadCsvUrl, {credentials: 'include'});
                return await fetchResp.text();
              }, downloadUrl);
        }
        console.log(await getData('https://finance.yahoo.com/quote/AAPL/history?p=AAPL', '#Col1-1-HistoricalDataTable-Proxy > section > div > table' ));
        // const browser = await puppeteer.launch({headless: true});
        // const page = await browser.newPage();
        // page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36');

        // await page.goto('https://experts.shopify.com');
        // await page.waitForSelector('.section');
    } catch (e) {
        console.log('our error', e)
    }
    await console.log()
})();