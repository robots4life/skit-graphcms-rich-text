<script>
	// 6.
	// finally make the "postsRichTextData" you return to the body available in the frontend of your application
	export let postsRichTextData;
</script>

<h1 class="text-4xl py-4">Welcome to SvelteKit</h1>
<p class="text-2xl py-3">
	Visit <a class="text-red-400" href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<!-- 7. -->
<!-- show the postsRichTextData data -->
{JSON.stringify(postsRichTextData, null, 2)}
