import styled from "styled-components";
import { CardMedia, Card, CardActions } from "@material-ui/core";

export const CardContainer = styled(Card)`
  max-width: "100%";
  margin-top: 5px;
`;
export const CardMediaDiv = styled(CardMedia)`
  height: 0;
  padding-top: "56.25%";
`;
export const CardContentDiv = styled.div`
  display: "flex";
  justify-content: "space-between";
`;
export const CardActionsDiv = styled(CardActions)`
  display: "flex";
  justify-content: "flex-end";
  > svg {
    cursor: pointer;
  }
`;
