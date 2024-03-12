import fetch from 'node-fetch';
import { parseStringPromise } from 'xml2js';

async function fetchRSSFeed(url) {
    try {
        const response = await fetch(url);
        const rssText = await response.text();

        // Debugging: Log the fetched RSS XML text
        console.log("Fetched RSS Text (truncated):", rssText.substring(0, 500));

        const parsedResult = await parseStringPromise(rssText);

        // Debugging: Log the parsed JavaScript object structure
        console.log("Parsed Result:", parsedResult);

        const items = parsedResult.rss.channel[0].item;

        const articles = items.map(item => ({
            title: item.title[0],
            link: item.link[0]
        }));

        // Debugging: Log the articles array
        console.log("Articles:", articles);

        return articles;
    } catch (error) {
        // Debugging: Log any errors that occur during the process
        console.error("Error fetching or parsing RSS feed:", error);
        return []; // Return an empty array in case of error
    }
}

export async function load() {
    const rssFeedUrl = 'https://utopiantool.substack.com/feed';
    const articles = await fetchRSSFeed(rssFeedUrl);

    // Pass the articles to the Svelte component via props
    return {
        props: {
            articles
        }
    };
}
