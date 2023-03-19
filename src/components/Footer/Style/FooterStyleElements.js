import styled from "styled-components";
import FooterImage from "../../../assets/images/footer.jpg";

// export const FooterContainer = styled.footer`
//   background-image: url(${FooterImage});
//   background-size: cover;
//   background-position: center;
//   opacity: 0.8;
//   padding: 40px 0;
//   color: white;
// `;
export const FooterContainer = styled.footer`
position: relative;
background-image: url(${FooterImage});
background-size: cover;
background-position: center;
padding: 40px 0;
color: white;
z-index: -1;
&::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: black;
  opacity: 0.8;
}
`;

export const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  z-index: 1;
  `;
  
  export const FooterContent = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  `;
  
  export const Logo = styled.img`
  z-index: 1;
  width: 5rem;
  height: 5rem;
  `;
  
  export const LogoWrapper = styled.div`
  flex-basis: 20%;
  margin-right: 50px;
  `;
  
  export const LogoImg = styled.img`
  height: 50px;
  `;
  
  export const Column = styled.div`
  z-index: 1;
  flex: 1;
  margin-right: 2rem;
  `;
  
  export const ColumnWrapper = styled.div`
  flex-basis: 20%;
  margin-bottom: 20px;
  
  `;
  
  export const ColumnTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
  `;
  
  export const ColumnList = styled.ul`
  list-style: none;
  padding: 0;
  `;
  
  export const ColumnListItem = styled.li`
  margin-bottom: 5px;
  font-size: 14px;
  `;
  
  export const SocialIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  `;
  
  export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem;
  `;
  
  export const SocialIcon = styled.a`
  color: white;
  font-size: 20px;
  margin-right: 20px;
  transition: color 0.2s;
  z-index: 1;
  
  &:hover {
      color: #f2f2f2;
    }
    `;
    
    export const Copyright = styled.p`
    font-size: 14px;
    margin-top: 30px;
`;
