import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as path from 'path';
import * as urlParser from 'url';

// Set to keep track of visited URLs to avoid redundant processing
export const seenUrls = new Set();

export const getUrl = (link, host, protocol) => {
  if (link.startsWith("http")) {
    return link; // Return the link if it is already an absolute URL
  } else if (link.startsWith("/")) {
    return `${protocol}//${host}${link}`; // Construct URL for root-relative links
  } else {
    return `${protocol}//${host}/${link}`; // Construct URL for relative links
  }
};

export const saveImages = async (imageUrls, host, protocol) => {
  for (const imageUrl of imageUrls) {
    try {
      const imageResponse = await fetch(getUrl(imageUrl, host, protocol)); // Fetch the image
      const filename = path.basename(imageUrl); // Get the image filename
      const dest = fs.createWriteStream(`images/${filename}`); // Create a write stream
      imageResponse.body.pipe(dest); // Save the image to the file system
    } catch (error) {
      console.error(`Failed to fetch image: ${imageUrl}`, error); // Handle errors in image fetching
    }
  }
};

export const parseUrl = (url) => {
  const parsedUrl = urlParser.parse(url);
  if (!parsedUrl || !parsedUrl.host || !parsedUrl.protocol) {
    throw new Error(`Invalid URL: ${url}`);
  }
  return parsedUrl;
};

export const fetchHtml = async (url) => {
  const response = await fetch(url);
  return await response.text();
};

export const extractLinksAndImages = (html) => {
  const $ = cheerio.load(html);
  const links = $("a")
    .map((i, link) => link.attribs.href)
    .get();
  const imageUrls = $("img")
    .map((i, link) => link.attribs.src)
    .get();
  return { links, imageUrls };
};

export const crawl = async ({ url, ignore }) => {
    if (seenUrls.has(url)) return; // Skip if the URL has already been processed
    console.log("crawling", url);
    seenUrls.add(url); // Mark the URL as seen
  
    let parsedUrl;
    try {
      parsedUrl = parseUrl(url); // Parse the URL
    } catch (error) {
      console.error(error.message);
      return;
    }
  
    const { host, protocol } = parsedUrl;
  
    let html;
    try {
      html = await fetchHtml(url); // Fetch the HTML content of the URL
    } catch (error) {
      console.error(`Failed to fetch URL: ${url}`, error);
      return;
    }
  
    const { links, imageUrls } = extractLinksAndImages(html); // Extract links and images
  
    // Save images
    saveImages(imageUrls, host, protocol);
  
    // Recursively crawl the extracted links
    links
      .filter((link) => link.includes(host) && !link.includes(ignore)) // Filter links to avoid ignored paths
      .forEach((link) => {
        crawl({
          url: getUrl(link, host, protocol), // Construct the full URL for the link
          ignore,
        });
      });
  };
  

