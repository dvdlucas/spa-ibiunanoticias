import logo from '../../images/LogoBN.png'
import "./NavBar.css"

export function NavBar(){
    return (
        <>
            <nav>
            <div className="input-search-space">
                <i className="bi bi-search"></i>
                <input type="text" />
            </div>
                <img src={logo} alt="Logo Breaking News" />
                <button>Entrar</button>
            </nav>
        </>
    );
}