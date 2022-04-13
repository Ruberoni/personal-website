import styled from "styled-components";

export const Body = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.body};
  width: fit-content;
  font-weight: 300;
`;
export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.heading};
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: 5px;
`;
