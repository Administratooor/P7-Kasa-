import React from 'react';
import logo from '../../assets/logo_footer.png';
import styled from 'styled-components';


// Utilisation de style component pour le footer 
const StyledBanner = styled.footer`
      display: flex;
      background-color: black;
      width: 100%;
      height: 169px;
      align-content: center;
      justify-content: center;
      align-items: center;
      flex-direction: column;
`;

const StyledBannerImg = styled.img`
      width: 122px;
      height: 40px;
`;

const StyledBannerH2 = styled.h2`
      color: white;
      font-size: 12px;
`;

function Footer() {
      return (
            <StyledBanner>
                  <StyledBannerImg src={logo} alt="footer" />
                  <StyledBannerH2>
                        © 2020 Kasa.All rights reserved
                  </StyledBannerH2>
            </StyledBanner>
      );
}

export default Footer;
