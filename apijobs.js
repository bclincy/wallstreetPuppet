async function logMovies() {
    let me = await fetch("https://smartsourcescheduling.com/api/services/timesheet/dashboard/workorders/43b12d8b-9f6e-458f-a92e-475d35c9ec6d", {
        "headers": {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "no-cache",
            "dauth": "221D93F7-C3AE-4E30-B578-4704F31A6397",
            "pragma": "no-cache",
            "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest",
            "cookie": "SS_TimezoneOffset=240; ASP.NET_SessionId=w013pq41wetdhybo442uq2o2; __RequestVerificationToken=kLgFWVQIWp8hIqI82ZdfvIqCf_RJ_U8f1aYaVRxTzXQ3dvCwUp0_lCBNxsMhGEF0fRL2Hvt_c4bZ8vdJM78IYpl4xX41; .ASPXAUTH=3E9ACC6F09C904A0CC1AF0B2F4AFAB064EEC4DDF1CE399A59391D99DE9C10BAD09C8A80F20381CCA1B233B7D219C76CA98705CC6B7A3DB13537AAB5572652F73C74402D07B5C99CA424DD3C73E7658CA4FFBEE6B717719BF22E36CE8F33A2AF3883F8C9F; ARRAffinity=2eafb6dc94224bdf7ab3c077830c7fcd177dea0ad485db0be0f02ffcbdb4d2ba; ARRAffinitySameSite=2eafb6dc94224bdf7ab3c077830c7fcd177dea0ad485db0be0f02ffcbdb4d2ba",
            "Referer": "https://smartsourcescheduling.com/SmartTime",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "POST"
    });
    const data = await me.json();
    const newJobs = await fetch("https://smartsourcescheduling.com/api/services/timesheet/dashboard/timesheets/43b12d8b-9f6e-458f-a92e-475d35c9ec6d", {
        "headers": {
          "accept": "application/json, text/javascript, */*; q=0.01",
          "accept-language": "en-US,en;q=0.9",
          "cache-control": "no-cache",
          "dauth": "221D93F7-C3AE-4E30-B578-4704F31A6397",
          "pragma": "no-cache",
          "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "https://smartsourcescheduling.com/SmartTime",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
      });
    const jobs = await newJobs.json();
     
    console.log(data);
}

logMovies();