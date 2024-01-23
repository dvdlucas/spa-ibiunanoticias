import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../images/LogoBN.png";
import { Nav, ImageLogo, InputSpace, ErrorSpan } from "../Navbar/NavBarStyled";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../Button/Button"
import { searchSchema } from "../../schemas/SearchSchema";

export function NavBar() {
  const { register, handleSubmit, reset, formState: {errors} } = useForm({
    resolver: zodResolver(searchSchema)
});
  const navigate = useNavigate();

  function onSearch(data) {
    const { title } = data;
    navigate(`/search/${title}`);
    reset();
  }

function goAuth(){
  navigate("/auth");
}

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
        <Link to="/auth">
          <Button type="button" text="Entrar">Entrar</Button>
        </Link>
      
      </Nav>
      {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
      <Outlet />
    </>
  );
}
