<script>
 import he from 'he';
 // export let data; // Ensuring a default structure
  
 export let data;
 
 data.articles = data.articles.map(article => ({
    ...article,
    description: article.description ? he.decode(article.description) : ''
  }));
</script>

<div id="container">
  <h1>Blog Posts</h1>
  {#each data.articles as { title, link, description, pubDate }}
  <a href={link} target="_blank">
    <div class="post">
      <div>
        <h3>{title}</h3>
        <p class="description">{description}</p>
        <p class="date">{pubDate}</p>
      </div>
    </div>
  </a>
{/each}
</div>
  
  <style>
    .posts {
      display: flex;
      flex-direction: column;
      gap: 2em;
    }
    .post {
      display: flex;
      justify-content: space-between;
      gap: 2em;
      align-items: center;
    }
    #container {
      display: flex;
      flex-direction: column;
      gap: 3em;
    }

    a:hover {
      text-decoration: underline;
    }
  </style>
  