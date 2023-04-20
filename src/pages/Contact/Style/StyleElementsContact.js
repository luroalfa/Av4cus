import styled from "styled-components";
import { mediaQueries } from "../../../styles/responsive";

export const ContainerFormMap = styled.section`
  display: flex;
  flex-direction: row;
  margin: 0px;
  ${mediaQueries.md} {
      flex-direction: column;
      margin: 15px;
    }
    `;
    
    export const ContainerFM = styled.div`
    width: 50%;
    ${mediaQueries.md} {
    width: 100%;
  }
`;
