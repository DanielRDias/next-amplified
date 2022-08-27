/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStream = /* GraphQL */ `
  query GetStream($id: ID!) {
    getStream(id: $id) {
      id
      name
      description
      type
      language
      start
      end
      viewsStart
      viewsEnd
      upVotes
      downVotes
      createdAt
      updatedAt
    }
  }
`;
export const listStreams = /* GraphQL */ `
  query ListStreams(
    $filter: ModelStreamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStreams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        type
        language
        start
        end
        viewsStart
        viewsEnd
        upVotes
        downVotes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
