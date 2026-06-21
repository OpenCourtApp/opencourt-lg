const puppeteer = require("puppeteer-core");

const out = process.argv[2] || "shot.png";
const sel = process.argv[3] || null;

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: "new",
    args: ["--no-sandbox", "--hide-scrollbars"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1000, deviceScaleFactor: 1 });

  let ok = false;
  for (let i = 0; i < 30 && !ok; i++) {
    try {
      await page.goto("http://localhost:3000", {
        waitUntil: "networkidle2",
        timeout: 8000,
      });
      ok = true;
    } catch (e) {
      await new Promise((r) => setTimeout(r, 2000));
    }
  }
  if (!ok) {
    console.log("server never came up");
    process.exit(1);
  }

  await new Promise((r) => setTimeout(r, 2000));

  // Scroll through the page to trigger all lazy-loaded images.
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let y = 0;
      const step = 350;
      const t = setInterval(() => {
        window.scrollBy(0, step);
        y += step;
        if (y >= document.body.scrollHeight) {
          clearInterval(t);
          resolve();
        }
      }, 80);
    });
    window.scrollTo(0, 0);
  });
  await new Promise((r) => setTimeout(r, 1500));

  if (sel) {
    const el = await page.$(sel);
    await el.evaluate((e) => e.scrollIntoView({ block: "center" }));
    await new Promise((r) => setTimeout(r, 800));
    await el.screenshot({ path: out });
  } else {
    await page.screenshot({ path: out, fullPage: true });
  }

  await browser.close();
  console.log("saved " + out);
})();
