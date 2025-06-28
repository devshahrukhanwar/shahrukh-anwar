import fs from 'fs';
import path from 'path';

const sitemapPath = path.join(process.cwd(), 'public/sitemap.xml');
const currentDate = new Date().toISOString().split('T')[0];

fs.readFile(sitemapPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading sitemap file:', err);
    return;
  }

  const updatedSitemap = data.replace(/<lastmod>.*?<\/lastmod>/g, `<lastmod>${currentDate}</lastmod>`);

  fs.writeFile(sitemapPath, updatedSitemap, 'utf8', (err) => {
    if (err) {
      console.error('Error writing updated sitemap file:', err);
    } else {
      console.log('sitemap updated successfully with current date:', currentDate);
    }
  });
});
