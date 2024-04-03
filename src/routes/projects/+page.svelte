<script>
	const postsModules = import.meta.glob('../../posts/*.md', { eager: true });

	const posts = Object.values(postsModules);
</script>



<div id="container">

	

	<div class="about">
		<h2>
			UNDER CONSTRUCTION
		</h2>
		<p>
			if you're interested in knowing more <a href="/about">about me tap here</a>
		</p>
	</div>
	<section>
		<h2>menu</h2>
		<hr />
		<!-- Looping through the list of posts with svelte's {#each} syntax ref: https://svelte.dev/tutorial/each-blocks -->
		<div class="posts">
			{#each posts as post}
				<a href={post.metadata.slug}>
					<div class="grid grid-cols-3">
						<h3>
							{post.metadata.title}
						</h3>
						<span>
							{post.metadata.type}
						</span>
						<span>{post.metadata.date}</span>
					</div>
				</a>
			{/each}
		</div>
	</section>
</div>

<!-- All the styling within .svelte files is scoped. Meaning any CSS in this file doesn't effect rest of the files -->
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
</style>
