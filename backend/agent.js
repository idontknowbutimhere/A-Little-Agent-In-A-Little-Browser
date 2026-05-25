const { chromium } =
  require("playwright");

async function runAgent() {

  // CONNECT TO YOUR LIVE CHROMIUM

  const browser =
    await chromium.connectOverCDP(

      "http://inbrowserbrowser.onrender.com:9222"

    );

  // GET EXISTING CONTEXT

  const contexts =
    browser.contexts();

  const context =
    contexts[0];

  // GET CURRENT PAGE
  // OR CREATE ONE

  let page =
    context.pages()[0];

  if (!page) {

    page =
      await context.newPage();
  }

  // GO TO GOOGLE

  await page.goto(
    "https://google.com"
  );

  // TYPE SLOWLY

  await page.locator(
    'textarea[name="q"]'
  ).pressSequentially(

    "hello from the ai agent",

    {
      delay: 120
    }
  );

  // WAIT

  await page.waitForTimeout(
    2000
  );

  // SEARCH

  await page.keyboard.press(
    "Enter"
  );

  console.log(
    "Live browser controlled."
  );
}

runAgent();