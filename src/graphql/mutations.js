/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createS3Object = /* GraphQL */ `
  mutation CreateS3Object(
    $input: CreateS3ObjectInput!
    $condition: ModelS3ObjectConditionInput
  ) {
    createS3Object(input: $input, condition: $condition) {
      bucket
      region
      key
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateS3Object = /* GraphQL */ `
  mutation UpdateS3Object(
    $input: UpdateS3ObjectInput!
    $condition: ModelS3ObjectConditionInput
  ) {
    updateS3Object(input: $input, condition: $condition) {
      bucket
      region
      key
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteS3Object = /* GraphQL */ `
  mutation DeleteS3Object(
    $input: DeleteS3ObjectInput!
    $condition: ModelS3ObjectConditionInput
  ) {
    deleteS3Object(input: $input, condition: $condition) {
      bucket
      region
      key
      id
      createdAt
      updatedAt
    }
  }
`;
export const createPark = /* GraphQL */ `
  mutation CreatePark(
    $input: CreateParkInput!
    $condition: ModelParkConditionInput
  ) {
    createPark(input: $input, condition: $condition) {
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
export const updatePark = /* GraphQL */ `
  mutation UpdatePark(
    $input: UpdateParkInput!
    $condition: ModelParkConditionInput
  ) {
    updatePark(input: $input, condition: $condition) {
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
export const deletePark = /* GraphQL */ `
  mutation DeletePark(
    $input: DeleteParkInput!
    $condition: ModelParkConditionInput
  ) {
    deletePark(input: $input, condition: $condition) {
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
