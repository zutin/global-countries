import { gql } from '@apollo/client';

const GET_COUNTRIES = gql`
  query {
    countries {
      emoji
      name
      capital
      languages {
        name
      }
    }
  }
`;

export { GET_COUNTRIES };