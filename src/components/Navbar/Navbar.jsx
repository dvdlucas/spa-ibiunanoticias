import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../images/LogoBN.png";
import { Nav, ImageLogo, InputSpace, ErrorSpan, userLoggedSpace } from "../Navbar/NavBarStyled";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../Button/Button"
import { searchSchema } from "../../schemas/SearchSchema";
import { userLogged } from "../../../services/userService";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export function NavBar() {
  const { register, handleSubmit, reset, formState: {errors} } = useForm({
    resolver: zodResolver(searchSchema)
});
  const navigate = useNavigate();
  const [user, setUser] = useState({})

  function onSearch(data) {
    const { title } = data;
    navigate(`/search/${title}`);
    reset();
  }

async function findUserLogged(){
  try{
    const response = await userLogged();
    setUser.data(response.data);
  } catch(error) {
    console.log(error)
  }
}

function signout(){}


useEffect(() => {
  if(Cookies.get("token")) findUserLogged();
}, [])


  return (
    <>
      <Nav>
        <form onSubmit={handleSubmit(onSearch)}>
          <InputSpace>
           <button type="submit">
                <i className="bi bi-search"></i>
            </button> 
            <input
              {...register("title")}
              type="text"
              placeholder="Pesquise por um título"
            />
          </InputSpace>
        </form>

        <Link to="/">
          <ImageLogo src={logo} alt="Logo Breaking News" />
        </Link>

      {user ? (
        <userLoggedSpace>
        <h2>{user.name}</h2>
        <i className="bi bi-box-arrow-right" onClick={signout}></i>
        </userLoggedSpace>
      ) : (
        <Link to="/auth">
        <Button type="button" text="Entrar">Entrar</Button>
        </Link>
      )}
      </Nav>
      {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
      <Outlet />
    </>
  );
}
