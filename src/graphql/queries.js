/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getS3Object = /* GraphQL */ `
  query GetS3Object($id: ID!) {
    getS3Object(id: $id) {
      bucket
      region
      key
      id
      createdAt
      updatedAt
    }
  }
`;
export const listS3Objects = /* GraphQL */ `
  query ListS3Objects(
    $filter: ModelS3ObjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listS3Objects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        bucket
        region
        key
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPark = /* GraphQL */ `
  query GetPark($id: ID!) {
    getPark(id: $id) {
      id
      name
      image {
        bucket
        region
        key
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listParks = /* GraphQL */ `
  query ListParks(
    $filter: ModelParkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image {
          bucket
          region
          key
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
