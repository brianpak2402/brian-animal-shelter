import styled from 'styled-components';

const NavbarStyles = styled.section`
    color: white;
    background: #ADD8E6;
    display: flex;

`;


const Navbar = () => {
    return (
        <NavbarStyles>
            <h1>Benji's Animal Shelter</h1>
        </NavbarStyles>
    );
};

export default Navbar