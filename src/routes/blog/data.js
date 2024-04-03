import fetch from 'node-fetch';
import { parseStringPromise } from 'xml2js';

export async function fetchRSSFeed(url) {
    const response = await fetch(url);
    const rssText = await response.text();
    const parsedResult = await parseStringPromise(rssText);
    const items = parsedResult.rss.channel[0].item;
    return items.map(item => ({
        title: item.title[0],
        link: item.link[0],
        description: item.description ? item.description[0] : null, // Subtitle/Description
        pubDate: item.pubDate ? item.pubDate[0] : null // Publication Date
    }));
}