import styled from 'styled-components';

// Utilisation des props avec styled-components pour passer les taille logo dans "Navbar"
const Img = styled.img`
      width: ${(props) => props.width || '130px'};
      height: ${(props) => props.height || 'auto'};
`;

export default Img;
