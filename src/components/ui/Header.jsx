import "../../styles/components/Header.scss";
import Logo from "../../assets/website_logo.png";
import { BsCartFill, BsFillPersonFill, BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useContext } from "react";

function Header({setProductCategory}){
    
    function SearchProductsByCategory(category){
        setProductCategory(category);
    }

    return (
    <>
    <header className="Header">
        <div className="Header_search"> <BsSearch/></div>
        <div className="Header_logo">
            <img height="70px" width="70px" src={Logo} />
        </div>
        <ul className="Header_menu" >
            <li><NavLink to="/"><p onClick={() => SearchProductsByCategory("Huile")}>Huiles</p></NavLink></li>
            <li><NavLink to="/"><p onClick={() => SearchProductsByCategory("Baume")}>Baumes</p></NavLink></li>
            <li> <NavLink to="/"><p onClick={() => SearchProductsByCategory("Brosse")}>Brosses</p></NavLink></li>
            <li><NavLink to="/"><p onClick={() => SearchProductsByCategory("Parfum")}>Parfums</p></NavLink></li>
        </ul>
        <div className="Header_iconsMenu">
            <NavLink to="/shop_cart">
                <div className="Button">
                    <div className="Button_icon"><BsCartFill /></div>
                    <p className="Button_text">Mon panier</p>
                </div>
            </NavLink> 
            <NavLink to="/authentication">
                <div className="Button">
                    <div className="Button_icon"><BsFillPersonFill /></div>
                <p className="Button_text">Mon espace</p>
                
                </div>
            </NavLink>
        </div>
    </header>
    </>
    )
}

export default Header;