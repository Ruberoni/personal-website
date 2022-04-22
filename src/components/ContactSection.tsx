import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import EmailIcon from "./icons/EmailIcon";
import GitHubLogoIcon from "./icons/GitHubLogoIcon";
import SectionLayout from "./Layout/SectionLayout";

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  color: white;
`;

const ContactListItem = styled.a`
  display: flex;
  align-items: center;
  gap: 13px;

  text-decoration: none;
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.body};

  width: fit-content;

  > svg {
    width: 24px;
  }
`;

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <SectionLayout
      title={t("Contact me")}
      headerTextColor="white"
      style={{ backgroundColor: "black" }}
    >
      <ContactList>
        <ContactListItem
          href="mailto:ruben.pardes25@gmail.com"
          target="_blank"
          title="Email"
        >
          <EmailIcon /> ruben.pardes25@gmail.com
        </ContactListItem>
        <ContactListItem
          href="https://github.com/Ruberoni"
          target="_blank"
          title="GitHub"
        >
          <GitHubLogoIcon /> Ruberoni
        </ContactListItem>
      </ContactList>
    </SectionLayout>
  );
};

export default ContactSection;
