import styled from 'styled-components';
import {mediaQueries} from "../../../styles/responsive"

export const ContainerStyle = styled.section`
  margin: 25px 100px;
  ${mediaQueries.md}{
      margin: 15px 10px;
  }
`;

