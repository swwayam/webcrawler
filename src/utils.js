import fetch from "node-fetch"; // TODO: Import the fetch function from the 'node-fetch' package to make HTTP requests
import * as cheerio from "cheerio"; // TODO: Import cheerio to parse and manipulate HTML
import * as fs from "fs"; // TODO: Import the file system module to perform file operations
import * as path from "path"; // TODO: Import the path module to handle and transform file paths
import * as urlParser from "url"; // TODO: Import the URL module to parse and handle URLs

// TODO: Initialize a set to keep track of visited URLs and avoid redundant processing

// TODO: Function to construct a complete URL from a link and base URL components
const getUrl = (link, host, protocol) => {
  // TODO: Check if the link is an absolute URL
  // TODO: Return the link if it is already an absolute URL
  // TODO: else if Construct URL for root-relative links
  // TODO: else Construct URL for relative links
};

// TODO: Function to save images from the provided image URLs
const saveImages = async (imageUrls, host, protocol) => {
  // TODO: Ensure the images directory exists
  // TODO: Get the full path to the images directory
  // TODO: Create the images directory if it doesn't exist

  // TODO: Loop through each image URL
  for (const imageUrl of imageUrls) {
    try {
      // TODO: Fetch the image from the constructed URL
      // TODO: Get the image filename
      // TODO: Create a write stream to save the image
      // TODO: Pipe the image data to the file system
    } catch (error) {
      // TODO: Handle errors in image fetching
    }
  }
};

// TODO: Function to parse a given URL and return its components
const parseUrl = (url) => {
  // TODO: Parse the URL
  // TODO: Throw an error if the URL is invalid
  // TODO: Return the parsed URL components
};

// TODO: Function to fetch HTML content from a given URL
const fetchHtml = async (url) => {
  // TODO: Fetch the HTML content from the URL
  // TODO: Return the HTML text
};

// TODO: Function to extract links and image URLs from the HTML content
const extractLinksAndImages = (html) => {
  // TODO: Load the HTML into cheerio for parsing
  // TODO: Extract all links from anchor tags
  // TODO: Extract all image URLs from image tags
  // TODO: Return the extracted links and image URLs
};

// TODO: Main function to crawl a given URL and extract information
export const crawl = async ({ url, ignore }) => {
  // TODO: Skip if the URL has already been processed
  // TODO: Log the URL being crawled
  // TODO: Mark the URL as seen

  let parsedUrl;
  try {
    // TODO: Parse the URL
  } catch (error) {
    // TODO: Log the error message
    // TODO: Exit the function if URL parsing fails
  }

  // TODO: Destructure the parsed URL components

  let html;
  try {
    // TODO: Fetch the HTML content of the URL
  } catch (error) {
    // TODO: Handle errors in URL fetching
    // TODO: Exit the function if HTML fetching fails
  }

  // TODO: Extract links and images from the HTML content

  // TODO: Save images
  // TODO: Ensure saveImages is awaited

  // TODO: Recursively crawl the extracted links
  // TODO: Filter links to avoid ignored paths
  // TODO: Construct the full URL for the link
};
