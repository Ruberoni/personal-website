import React from "react";
import styled from "styled-components";
import { Body } from "../common/text";
import Triangle from "../icons/Triangle";

const Container = styled.div`
  min-width: 150px;
  height: 52px;
  border-radius: 5px;
  background: #283645;
  box-shadow: -5px 5px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;

  overflow: hidden;
`;

const SkillImage = styled.img`
  width: 80px;
  height: fit-content;
  margin-left: -13px;
  margin-right: 3px;
`;

export interface SkillsListItem {
  imageSrc?: string;
  label?: string;
}

const SkillsListItem = ({ label, imageSrc }: SkillsListItem) => {
  return (
    <Container>
      {imageSrc && <SkillImage src={imageSrc} />}
      <Body style={{ marginRight: 15 }}>{label || "Label"}</Body>
      <StyledTriangle />
    </Container>
  );
};

const StyledTriangle = styled(Triangle).attrs(({ theme }) => ({
  fill: theme.colors.secondary,
}))`
  margin-left: auto;
  margin-right: 10px;
`;

export default SkillsListItem;
