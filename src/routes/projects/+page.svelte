<script>
	const postsModules = import.meta.glob('../../posts/*.md', { eager: true });

	const posts = Object.values(postsModules);

	import {fly} from 'svelte/transition';
</script>



<div id="container"transition:fly={{ y: 100, duration: 500 }}>

	

	<div class="about">
		<h1>
			Under Construction
		</h1>
		<p>
			Still getting a lot of this put together. If you're interested in knowing more <a href="/about">about me tap here</a>
		</p>
	</div>
	<section>
		<h2>Menu</h2>
		<hr />
		<!-- Looping through the list of posts with svelte's {#each} syntax ref: https://svelte.dev/tutorial/each-blocks -->
		<div class="posts">
			{#each posts as post}
				<a href={post.metadata.slug}>
					<div class="grid grid-cols-3">
						<h3>
							{post.metadata.title}
						</h3>
						<h3>
							{post.metadata.type}
						</h3>
						<h3>{post.metadata.date}</h3>
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
