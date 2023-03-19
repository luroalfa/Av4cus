import styled from "styled-components";
import FooterImage from "../../../assets/images/footer.jpg";
import { colors, fontSize, fontWeight } from "../../../styles/theme";
import { mediaQueries } from "../../../styles/responsive";

export const FooterContainer = styled.footer`
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)),
    url(${FooterImage});
  background-position: center;
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: -1;

  &::before {
    background-color: ${colors.black};
    bottom: 0;
    content: "";
    left: 0;
    opacity: 0.8;
    position: absolute;
    right: 0;
    top: 0;
  }
  ${mediaQueries.md}{
    padding: 40px 0;
  }
`;

export const Content = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mediaQueries.md} {
    flex-direction: column;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem 5em;
  ${mediaQueries.md} {
    align-items: center;
    flex-direction: column;
    padding: 2em 0 0 0;
  }
`;

export const Logo = styled.img`
  z-index: 1;
  width: 5rem;
  height: 5rem;
`;

export const Column = styled.div`
  z-index: 1;
  margin: 2em;
  ${mediaQueries.md} {
    margin: 1em 0 0 0;
    text-align: center;
  }
`;

export const ColumnTitle = styled.h3`
  font-size: ${fontSize.large};
  font-weight: ${fontWeight.bold};
`;

export const ColumnList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ColumnListItem = styled.li`
  margin: 2em 0;
  font-size: ${fontSize.Small};
  & span {
    display: block;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SocialIcon = styled.a`
  color: white;
  font-size: 1.5em;
  padding: 0 1em;
  z-index: 1;
  &:hover {
    color: #f2f2f2;
  }
`;

export const Copyright = styled.p`
  z-index: 1;
  font-size: ${fontSize.Small};
  margin: 1em 0 1em 4em;
  ${mediaQueries.md} {
    font-size: ${fontSize.xSmall};
    text-align: center;
    margin: 2em 0 0 0;
    & span {
      display: block;
    }
  }
`;
