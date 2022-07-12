# Public Demo

-   SvelteKit
-   GraphCMS
-   Rich Text Data

## Index Page `/`

1.  https://github.com/robots4life/skit-graphcms-rich-text/blob/master/src/routes/index.js

-   add the graphql-client
-   query the CMS for the raw content type of the model
-   return the data with the body

2.  https://github.com/robots4life/skit-graphcms-rich-text/blob/master/src/routes/index.svelte

-   make the returned data available by `export let postsRichTextData`
-   import the `astToHtmlString` function from the `@graphcms/rich-text-html-renderer`
-   render the single post data

## Posts Page `/posts`

1. https://github.com/robots4life/skit-graphcms-rich-text/blob/master/src/routes/posts/index.js

-   add the graphql-client
-   query the CMS for the raw content type of the model
-   return the data with the body

2. https://github.com/robots4life/skit-graphcms-rich-text/blob/master/src/routes/posts/index.svelte

-   make the returned data available by `export let postsRichTextData`
-   import the `astToHtmlString` function from the `@graphcms/rich-text-html-renderer`
-   https://github.com/robots4life/skit-graphcms-rich-text/blob/master/src/routes/posts/index.svelte#L28
    render the 2 posts with a Svelte `#each` block and by calling the `astToHtmlString` function <strong>inside</strong> the `#each` block for each single piece of post data
