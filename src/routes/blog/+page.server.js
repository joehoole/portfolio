// src/routes/your-route/+page.server.js
import { fetchRSSFeed } from './data.js';

export async function load() {
    const rssFeedUrl = 'https://utopiantool.substack.com/feed';
    const articles = await fetchRSSFeed(rssFeedUrl);
    
    return { articles };

}
