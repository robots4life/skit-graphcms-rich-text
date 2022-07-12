import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

export const GRAPHQL_ENDPOINT = process.env['GRAPHQL_ENDPOINT'];
console.log(GRAPHQL_ENDPOINT);
