/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStream = /* GraphQL */ `
  mutation CreateStream(
    $input: CreateStreamInput!
    $condition: ModelStreamConditionInput
  ) {
    createStream(input: $input, condition: $condition) {
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
export const updateStream = /* GraphQL */ `
  mutation UpdateStream(
    $input: UpdateStreamInput!
    $condition: ModelStreamConditionInput
  ) {
    updateStream(input: $input, condition: $condition) {
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
export const deleteStream = /* GraphQL */ `
  mutation DeleteStream(
    $input: DeleteStreamInput!
    $condition: ModelStreamConditionInput
  ) {
    deleteStream(input: $input, condition: $condition) {
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
