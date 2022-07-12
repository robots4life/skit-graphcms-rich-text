<script>
	// 6.
	// finally make the "postsRichTextData" you return to the body available in the frontend of your application
	export let postsRichTextData;

	// https://github.com/hygraph/rich-text/tree/main/packages/html-renderer#-usageexamples
	import { astToHtmlString } from '@graphcms/rich-text-html-renderer';

	// const content = postsRichTextData.posts[0].richText.raw;

	const posts = postsRichTextData.posts.map((element) => {
		return element.richText.raw;
	});
	console.log(posts);
</script>

<h1 class="text-4xl py-4">Welcome to SvelteKit</h1>
<p class="text-2xl py-3">
	Visit <a class="text-red-400" href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<!-- 7. -->
<!-- show the postsRichTextData data -->
<!-- {JSON.stringify(postsRichTextData, null, 2)} -->

<!-- 8. -->
<!-- use the rich-text-renderer to render the HTML -->
{#each posts as content}
	<!-- content here -->
	<hr />
	<div class="prose lg:prose-xl">{@html astToHtmlString({ content })}</div>
{/each}

<!-- <div>{@html html}</div> -->
<style>
	hr {
		border-width: 1rem;
		border-color: aquamarine;
	}
</style>
