const puppeteer = require('puppeteer');

(async () => {
  // Create a new browser instance
  const browser = await puppeteer.launch({'headless':false});

  // Navigate to the login page
  const page = await browser.newPage();
  await page.setRequestInterception(true);
  await page.goto('https://smartsourcescheduling.com/home/Login',
  { waitUntil: 'networkidle2' }
  );
  
  // Fill in the username and password fields
  // USER_ID=239482 USER_KEY=foobar node app.js

  await page.type('#Username', process.env.USER_ID);
  await page.type('#Password',process.env.USER_KEY);
  // Click the login button
  await page.click('button[type="submit"]');
  
  const jobPage = await browser.newPage();
//   await jobPage.setRequestInterception(true);
//   jobPage.on('request', (request) => {
//     console.log(request.url())
//     request.continue();
//   });
//   await jobPage.setViewport({width: 1200, height: 720});
//   console.log()
  
  // Close the browser instance
  await browser.close();
})();
