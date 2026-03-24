const { chromium } = require('playwright');

const targets = [
  { name: 'stand_trade', url: 'https://stand.trade' },
  { name: 'kreo', url: 'https://kreo.trade' },
  { name: 'polymtrade', url: 'https://polymtrade.com' },
  { name: 'bullpen', url: 'https://bullpen.markets' },
  { name: 'polymer', url: 'https://polymer.fi' },
  { name: 'olympusx', url: 'https://olympusx.app' },
  { name: 'evplusai', url: 'https://evplus.ai' },
  { name: 'simmer', url: 'https://simmer.markets' },
  { name: 'almanac', url: 'https://almanac.market' },
  { name: 'polymarket_eye', url: 'https://polymarketeye.com' },
  { name: 'polycule', url: 'https://polycule.xyz' },
  { name: 'noarb', url: 'https://noarb.xyz' },
  { name: 'polymaker_bet', url: 'https://polymaker.bet' },
  { name: 'polybot', url: 'https://polybot.trade' },
  { name: 'polydupe', url: 'https://polydupe.com' },
  { name: 'chance', url: 'https://chance.markets' },
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const results = {};

  for (const target of targets) {
    console.log(`\n=== Scraping: ${target.name} (${target.url}) ===`);
    try {
      const page = await browser.newPage();
      await page.setExtraHTTPHeaders({
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36'
      });
      await page.goto(target.url, { waitUntil: 'domcontentloaded', timeout: 20000 });
      // Wait a bit for JS to render
      await page.waitForTimeout(3000);
      
      const text = await page.evaluate(() => {
        // Remove scripts and styles
        document.querySelectorAll('script, style, noscript').forEach(el => el.remove());
        return document.body?.innerText || '';
      });
      
      // Get all links
      const links = await page.evaluate(() => {
        return [...document.querySelectorAll('a[href]')]
          .map(a => ({ text: a.innerText.trim().slice(0, 60), href: a.href }))
          .filter(l => l.text && l.href && !l.href.startsWith('javascript'))
          .slice(0, 20);
      });

      const title = await page.title();
      const cleanText = text.replace(/\s+/g, ' ').trim().slice(0, 3000);
      
      results[target.name] = { title, text: cleanText, links };
      console.log(`Title: ${title}`);
      console.log(`Text (first 500): ${cleanText.slice(0, 500)}`);
      console.log(`Links: ${links.slice(0,5).map(l => l.text + ' -> ' + l.href).join(' | ')}`);
      
      await page.close();
    } catch (err) {
      console.log(`ERROR for ${target.name}: ${err.message}`);
      results[target.name] = { error: err.message };
    }
  }

  await browser.close();
  
  // Save results
  const fs = require('fs');
  fs.writeFileSync('/Users/frank/ai/cursor/polymarket/research/scrape_results.json', JSON.stringify(results, null, 2));
  console.log('\n✅ Results saved to scrape_results.json');
})();
