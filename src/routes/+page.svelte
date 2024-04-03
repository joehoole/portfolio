<script>
	import { onMount } from 'svelte';
	import { initializeTypewriter } from '../lib/typewriter';
  
	onMount(() => {
	  const textSets = [
		"BOM DIA MEU AMIGO",
		"DESIGNER",
		"MAKER",
		"USER",
		"LET'S TALK FUTURE",
		"AT THE VAGUE INTERSECTION OF ART AND TECHNOLOGY",
		"TEACHER"
	  ];
	  const colors = ["#0477BF", "#F2B705", "#A6290D"];
	  initializeTypewriter('typewriter', textSets, colors);
	});
  </script>
  
  <div id="typewriter" class="text-2xl font-semibold"></div>
  
  <style>
	@keyframes blink-cursor {
		50% { opacity: 0; }
	}
  
	#typewriter {
    @apply relative;
    @apply mx-auto;
    @apply p-5;
    @apply text-12xl;
    @apply font-mono;
    @apply text-white;
    font-family: 'deuterium-variable', sans-serif;
    font-variation-settings: "wght" 700;
	line-height: 1;
	    /* Hyphenation */
	overflow-wrap: break-word;
    word-wrap: break-word;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
}
@media (max-width: 1024px) {
    #typewriter {
        font-size: 5rem; 
    }
}
	.typewriter-cursor {
		animation: blink-cursor 1s step-end infinite;
	}

  </style>
  