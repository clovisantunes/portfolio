import React, {useState} from "react";
import './Navbar.css';

const Navbar = () => {
    const logo = "<Ƈ.ʂ/>"
    const [burger_class, setBurgerClass] = useState("burger_bar unclicked");
    const [menu_class, setMenuClass] = useState ("menu hidden");
    const [isMenuClicked, setIsMenuClick] = useState(false);

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger_bar clicked")
            setMenuClass("menu visible")
        }else{
            setBurgerClass("burger_bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClick(!isMenuClicked);
    }

    return (
        <div>
            <nav>
                <div className="burger_menu" onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>
                <h1>{logo}</h1>
            </nav>
            <div className={menu_class}>
                <h1 className="text">Bem vindo ao meu Portifolio</h1>
                <ul className="items">
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                    <li>
                        <a href="#">Contato</a>
                    </li>
                    <li>
                        <a href="#">Projetos</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;