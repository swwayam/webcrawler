import express from 'express';
import { crawl } from './utils.js';
const app = express();
const port = 3000;

// Endpoint to start the crawling process
app.get('/crawl', (req, res) => {
  const startUrl = req.query.url || 'http://stevescooking.blogspot.com/';
  const ignorePath = req.query.ignore || '/search';

  crawl({ url: startUrl, ignore: ignorePath })
    .then(() => res.send('Crawling started. Check the console for progress.'))
    .catch(error => res.status(500).send(`Error: ${error.message}`));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
