<script>
	// Getting the site config
	import { config } from '../site.config';

	// Importing the global css
	import '../global.css';

	import { spring } from 'svelte/motion';

	import { onMount } from 'svelte';



let coords = spring(
	{ x: 50, y: 50 },
	{
		stiffness: 0.1,
		damping: 0.25
	}
);

let size = spring(10);

onMount(() => {
        const svg = document.querySelector('svg');
        svg.addEventListener('click', function(e) {
            clickThroughElement(e.clientX, e.clientY);
        });
    });

	function clickThroughElement(x, y) {
    // Temporarily disable pointer events on the SVG
    const svg = document.querySelector('svg');
    svg.style.pointerEvents = 'none';

    // Find the element at the specified coordinates
    const elemBelow = document.elementFromPoint(x, y);

    // Re-enable pointer events on the SVG
    svg.style.pointerEvents = 'auto';

    // Dispatch a click event to the element below
    if (elemBelow) {
        elemBelow.click();
    }
}




</script>

<svelte:head>
	<title>{config.title}</title>
	<meta name="description" content={config.description} />
</svelte:head>

<nav class="flex items-center justify-between">
	<h1 class="text-4xl"><a href="/">{config.title}</a></h1>
	<a href="/projects">Projects</a>
	<a href="/about">About</a>
	<a href="/blog">Blog</a>
  </nav>
  



<slot />




<!-- svelte-ignore a11y-no-static-element-interactions -->
<svg
	on:mousemove={(e) => coords.set({ x: e.clientX, y: e.clientY })}
	on:mousedown={() => size.set(30)}
	on:mouseup={() => size.set(10)}
>
	<circle cx={$coords.x} cy={$coords.y} r={$size} />
</svg>

<style>
	
	svg {
	position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
}
	circle {
		fill: #f2b705;
		mix-blend-mode: multiply;
	}
	    /* Hide cursor on small screens */
		@media (max-width: 768px) {
        svg {
            display: none;
        }
    }

 

</style>