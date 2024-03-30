import fetch from 'node-fetch';
import { parseStringPromise } from 'xml2js';

export async function fetchRSSFeed(url) {
    const response = await fetch(url);
    const rssText = await response.text();
    const parsedResult = await parseStringPromise(rssText);
    const items = parsedResult.rss.channel[0].item;
    return items.map(item => ({
        title: item.title[0],
        link: item.link[0]
    }));
}