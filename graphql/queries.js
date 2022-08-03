import { gql } from "@apollo/client";

export const GET_SUPPORTED_COUNTRIES = gql`
  query GetSupportedCountries {
    getSupportedCountries {
      name
      states {
        status
        name
      }
    }
  }
`;
