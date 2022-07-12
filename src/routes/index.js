import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

export const GRAPHQL_ENDPOINT = process.env['GRAPHQL_ENDPOINT'];
console.log(GRAPHQL_ENDPOINT);

// 1.
// use the get function to fire a GET request when the page loads
// https://kit.svelte.dev/docs/routing#endpoints
export async function get() {
	try {
		// 2.
		// copy the query from your API playground
		// make sure it works in the API playground first before you copy it into your code
		const getMessages = gql`
			query PostsRichText {
				posts {
					richText {
						raw
					}
				}
			}
		`;

		// 3.
		// then create a request on the graphql-client and feed it the query
		const postsRichTextData = await client.request(getMessages);

		// 4.
		// the result should be your rich text data
		console.log(postsRichTextData);

		// 5.
		// finally return this data from the server side to the frontend of your application
		// do this by having the body property and feed it the "postsRichTextData"
		// you got back from the request to the graphql-client you made above
		return {
			status: 200,
			body: { postsRichTextData }
		};
	} catch (error) {
		return {
			status: 500,
			body: {
				error: 'Server error : ' + error
			}
		};
	}
}
