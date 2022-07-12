import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

import { astToHtmlString } from '@graphcms/rich-text-html-renderer';

export const GRAPHQL_ENDPOINT = process.env['GRAPHQL_ENDPOINT'];
console.log(GRAPHQL_ENDPOINT);
