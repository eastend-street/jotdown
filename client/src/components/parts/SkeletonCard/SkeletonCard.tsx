import React from "react";
import styled from "styled-components";
import Skeleton from "@material-ui/lab/Skeleton";
import Card from "@material-ui/core/Card";

const StyledCard = styled(Card)`
  && {
    box-shadow: none;
    height: 100%;
    position: relative;
  }
`;

const StyledRect = styled(Skeleton)`
  && {
    height: 0;
    padding-top: 52.5%;
  }
`;

const TitleArea = styled.div`
  padding: 0.5rem 1rem;
  min-height: 4rem;
`;

const SkeletonButton = styled(Skeleton)`
  && {
    margin: 0.5rem 0 0.5rem auto;
    width: 5rem;
    border-radius: 0.2rem;
  }
`;

const HalfText = styled(Skeleton)`
  && {
    margin-top: 0.5rem;
    width: 70%;
  }
`;

const SkeletonCard: React.FC = () => (
  <StyledCard>
    <StyledRect variant="rect" animation="wave" />
    <TitleArea>
      <Skeleton variant="text" animation="wave" />
      <HalfText variant="text" animation="wave" />
    </TitleArea>
    <TitleArea>
      <Skeleton variant="text" animation="wave" />
      <HalfText variant="text" animation="wave" />
      <SkeletonButton variant="rect" animation="wave" />
    </TitleArea>
  </StyledCard>
);

export default SkeletonCard;
