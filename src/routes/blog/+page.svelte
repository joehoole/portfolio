<script>
    export let data;
    export let articles = [];
    console.log("Articles:", articles);

  </script>
  
  <div id="container">
    <div class="about">
      <p>thoughts available on substack</p>
    </div>
    <section>
      <h2>recent posts</h2>
      <hr />
      <div class="posts">
        {#each articles as { title, link }}
          <a href={link} target="_blank">
            <div class="post">
              <h3>{title}</h3>
            </div>
          </a>
        {/each}
      </div>
    </section>
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
    a {
      text-decoration: none;
      color: black; 
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
  