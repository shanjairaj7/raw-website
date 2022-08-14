import { gql } from "@apollo/client";

export const CONTACT_US = gql`
  mutation SendEmail($input: SendEmailInput!) {
    sendEmail(input: $input) {
      success
    }
  }
`;
