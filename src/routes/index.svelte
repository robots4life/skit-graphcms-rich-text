<script>
	// 6.
	// finally make the "postsRichTextData" you return to the body available in the frontend of your application
	export let postsRichTextData;

	// https://github.com/hygraph/rich-text/tree/main/packages/html-renderer#-usageexamples
	import { astToHtmlString } from '@graphcms/rich-text-html-renderer';

	const content = postsRichTextData.posts[0].richText.raw;

	// const content = postsRichTextData.posts.map((element) => {
	// 	console.log(element.richText.raw);
	// 	return element.richText.raw;
	// });

	const html = astToHtmlString({
		content
	});
</script>

<h1 class="text-4xl py-4">Welcome to SvelteKit</h1>
<p class="text-2xl py-3">
	Visit <a sveltekit:prefetch class="text-red-400" href="/posts">the Posts Page</a> to see 2 rendered posts in action
</p>

<!-- 7. -->
<!-- show the postsRichTextData data -->
{JSON.stringify(postsRichTextData, null, 2)}

<!-- 8. -->
<!-- use the rich-text-renderer to render the HTML -->
<div>{@html html}</div>

<style>
	h1 {
		font-size: 2rem;
	}
</style>
