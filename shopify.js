const puppeteer = require('puppeteer');
const fs = require('fs-extra');

(async function main() {
    try {
        
        const browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage();
        page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36');

        await page.goto('https://experts.shopify.com');
        await page.waitForSelector('.section');
        const sections = await page.$$('.section');
        console.log('')
        if(!fs.existsSync('output.csv')) {
            await fs.writeFile('output.csv', 'section,name\n');
        }

        for (let i = 0; i < sections.length; i++) {
            await page.goto('https://experts.shopify.com');
            await page.waitForSelector('.section');
            const sections = await page.$$('.section');

            const section = sections[i];
            const button = await section.$('a.marketing-button');
            const buttonName = await page.evaluate(button => button.innerText, button);
            console.log("\n\n");
            console.log( 'button Name: ', buttonName);
            // New page
            button.click();
            await page.waitForSelector('#ExpertsResults');
            await page.screenshot({path: 'clickbd'+ Math.floor(Math.random() * 10) +'.png',fullPage: true});
            const list = await page.$$('#ExpertsResults > li');
            for (const li of list) {
                const name = await li.$eval('h2', h2 => h2.innerText);
                console.log(name);
                await fs.appendFile('output.csv', `"${buttonName}", "${name}"\n`);
            }
            i++;
        }

        await console.log('Done');
        await browser.close();
    } catch (e) {
        console.log('our error', e)
    }
   
})();
// console.log('done');