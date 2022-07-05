import styled from "styled-components";

const NavbarStyles = styled.section`
    background: blue;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const Logo = styled.h1`
    color: white;
`;

const Navbar = () => {
    return (
        <NavbarStyles>
            <Logo>Benji's Animal Shelter</Logo>
        </NavbarStyles>
    );
};

export default Navbar;