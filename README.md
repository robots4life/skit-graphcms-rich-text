### Public Demo

-   SvelteKit
-   GraphCMS
-   Rich Text Data

1.  https://github.com/robots4life/skit-graphcms-rich-text/blob/master/src/routes/index.js

-   add the graphql-client
-   query the CMS for the raw content type of the model
-   return the data with the body

2.  https://github.com/robots4life/skit-graphcms-rich-text/blob/master/src/routes/index.svelte

-   make the returned data available by `export let postsRichTextData`
-   import the `astToHtmlString` function from the `@graphcms/rich-text-html-renderer`
-
