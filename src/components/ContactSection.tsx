import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import EmailIcon from "./icons/EmailIcon";
import GitHubLogoIcon from "./icons/GitHubLogoIcon";
import SectionLayout from "./Layout/SectionLayout";

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
`

const ContactListItem = styled.div`
  
`

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <SectionLayout
      title={t("Contact me")}
      headerTextColor="white"
      style={{ backgroundColor: "black" }}
    >
      <ContactList>
        <GitHubLogoIcon fill="white"/>
        Ruberoni
        <EmailIcon />
      </ContactList>
    </SectionLayout>
  );
};

export default ContactSection;
