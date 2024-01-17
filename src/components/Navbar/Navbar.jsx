import logo from '../../images/LogoBN.png';
import { Button, Nav, ImageLogo, InputSpace } from '../Navbar/NavBarStyled';
import { Outlet } from "react-router-dom";


export function NavBar(){
    return (
        <>
            <Nav>
            <InputSpace>
                <i className="bi bi-search"></i>
                <input type="text" placeholder='Pesquise por um título'/>
            </InputSpace>
                <ImageLogo src={logo} alt="Logo Breaking News" />
                <Button>Entrar</Button>
            </Nav>
            < Outlet />
        </>
    );
}
