<script>
 // export let data; // Ensuring a default structure
  export let data;
  
</script>

<div id="container">
  <h1>blog posts</h1>
  {#each data.articles as { title, link }}
      <a href={link} target="_blank">
          <div class="post">
              <h3>{title}</h3>
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
  