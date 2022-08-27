/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStreamInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  type?: string | null,
  language?: string | null,
  start?: string | null,
  end?: string | null,
  viewsStart?: number | null,
  viewsEnd?: number | null,
  upVotes?: number | null,
  downVotes?: number | null,
};

export type ModelStreamConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  type?: ModelStringInput | null,
  language?: ModelStringInput | null,
  start?: ModelStringInput | null,
  end?: ModelStringInput | null,
  viewsStart?: ModelIntInput | null,
  viewsEnd?: ModelIntInput | null,
  upVotes?: ModelIntInput | null,
  downVotes?: ModelIntInput | null,
  and?: Array< ModelStreamConditionInput | null > | null,
  or?: Array< ModelStreamConditionInput | null > | null,
  not?: ModelStreamConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Stream = {
  __typename: "Stream",
  id: string,
  name: string,
  description?: string | null,
  type?: string | null,
  language?: string | null,
  start?: string | null,
  end?: string | null,
  viewsStart?: number | null,
  viewsEnd?: number | null,
  upVotes?: number | null,
  downVotes?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateStreamInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  type?: string | null,
  language?: string | null,
  start?: string | null,
  end?: string | null,
  viewsStart?: number | null,
  viewsEnd?: number | null,
  upVotes?: number | null,
  downVotes?: number | null,
};

export type DeleteStreamInput = {
  id: string,
};

export type ModelStreamFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  type?: ModelStringInput | null,
  language?: ModelStringInput | null,
  start?: ModelStringInput | null,
  end?: ModelStringInput | null,
  viewsStart?: ModelIntInput | null,
  viewsEnd?: ModelIntInput | null,
  upVotes?: ModelIntInput | null,
  downVotes?: ModelIntInput | null,
  and?: Array< ModelStreamFilterInput | null > | null,
  or?: Array< ModelStreamFilterInput | null > | null,
  not?: ModelStreamFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelStreamConnection = {
  __typename: "ModelStreamConnection",
  items:  Array<Stream | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionStreamFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  language?: ModelSubscriptionStringInput | null,
  start?: ModelSubscriptionStringInput | null,
  end?: ModelSubscriptionStringInput | null,
  viewsStart?: ModelSubscriptionIntInput | null,
  viewsEnd?: ModelSubscriptionIntInput | null,
  upVotes?: ModelSubscriptionIntInput | null,
  downVotes?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionStreamFilterInput | null > | null,
  or?: Array< ModelSubscriptionStreamFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateStreamMutationVariables = {
  input: CreateStreamInput,
  condition?: ModelStreamConditionInput | null,
};

export type CreateStreamMutation = {
  createStream?:  {
    __typename: "Stream",
    id: string,
    name: string,
    description?: string | null,
    type?: string | null,
    language?: string | null,
    start?: string | null,
    end?: string | null,
    viewsStart?: number | null,
    viewsEnd?: number | null,
    upVotes?: number | null,
    downVotes?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStreamMutationVariables = {
  input: UpdateStreamInput,
  condition?: ModelStreamConditionInput | null,
};

export type UpdateStreamMutation = {
  updateStream?:  {
    __typename: "Stream",
    id: string,
    name: string,
    description?: string | null,
    type?: string | null,
    language?: string | null,
    start?: string | null,
    end?: string | null,
    viewsStart?: number | null,
    viewsEnd?: number | null,
    upVotes?: number | null,
    downVotes?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStreamMutationVariables = {
  input: DeleteStreamInput,
  condition?: ModelStreamConditionInput | null,
};

export type DeleteStreamMutation = {
  deleteStream?:  {
    __typename: "Stream",
    id: string,
    name: string,
    description?: string | null,
    type?: string | null,
    language?: string | null,
    start?: string | null,
    end?: string | null,
    viewsStart?: number | null,
    viewsEnd?: number | null,
    upVotes?: number | null,
    downVotes?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetStreamQueryVariables = {
  id: string,
};

export type GetStreamQuery = {
  getStream?:  {
    __typename: "Stream",
    id: string,
    name: string,
    description?: string | null,
    type?: string | null,
    language?: string | null,
    start?: string | null,
    end?: string | null,
    viewsStart?: number | null,
    viewsEnd?: number | null,
    upVotes?: number | null,
    downVotes?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStreamsQueryVariables = {
  filter?: ModelStreamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStreamsQuery = {
  listStreams?:  {
    __typename: "ModelStreamConnection",
    items:  Array< {
      __typename: "Stream",
      id: string,
      name: string,
      description?: string | null,
      type?: string | null,
      language?: string | null,
      start?: string | null,
      end?: string | null,
      viewsStart?: number | null,
      viewsEnd?: number | null,
      upVotes?: number | null,
      downVotes?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateStreamSubscriptionVariables = {
  filter?: ModelSubscriptionStreamFilterInput | null,
};

export type OnCreateStreamSubscription = {
  onCreateStream?:  {
    __typename: "Stream",
    id: string,
    name: string,
    description?: string | null,
    type?: string | null,
    language?: string | null,
    start?: string | null,
    end?: string | null,
    viewsStart?: number | null,
    viewsEnd?: number | null,
    upVotes?: number | null,
    downVotes?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStreamSubscriptionVariables = {
  filter?: ModelSubscriptionStreamFilterInput | null,
};

export type OnUpdateStreamSubscription = {
  onUpdateStream?:  {
    __typename: "Stream",
    id: string,
    name: string,
    description?: string | null,
    type?: string | null,
    language?: string | null,
    start?: string | null,
    end?: string | null,
    viewsStart?: number | null,
    viewsEnd?: number | null,
    upVotes?: number | null,
    downVotes?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStreamSubscriptionVariables = {
  filter?: ModelSubscriptionStreamFilterInput | null,
};

export type OnDeleteStreamSubscription = {
  onDeleteStream?:  {
    __typename: "Stream",
    id: string,
    name: string,
    description?: string | null,
    type?: string | null,
    language?: string | null,
    start?: string | null,
    end?: string | null,
    viewsStart?: number | null,
    viewsEnd?: number | null,
    upVotes?: number | null,
    downVotes?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
