/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateS3Object = /* GraphQL */ `
  subscription OnCreateS3Object($filter: ModelSubscriptionS3ObjectFilterInput) {
    onCreateS3Object(filter: $filter) {
      bucket
      region
      key
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateS3Object = /* GraphQL */ `
  subscription OnUpdateS3Object($filter: ModelSubscriptionS3ObjectFilterInput) {
    onUpdateS3Object(filter: $filter) {
      bucket
      region
      key
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteS3Object = /* GraphQL */ `
  subscription OnDeleteS3Object($filter: ModelSubscriptionS3ObjectFilterInput) {
    onDeleteS3Object(filter: $filter) {
      bucket
      region
      key
      id
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePark = /* GraphQL */ `
  subscription OnCreatePark($filter: ModelSubscriptionParkFilterInput) {
    onCreatePark(filter: $filter) {
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
export const onUpdatePark = /* GraphQL */ `
  subscription OnUpdatePark($filter: ModelSubscriptionParkFilterInput) {
    onUpdatePark(filter: $filter) {
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
export const onDeletePark = /* GraphQL */ `
  subscription OnDeletePark($filter: ModelSubscriptionParkFilterInput) {
    onDeletePark(filter: $filter) {
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
