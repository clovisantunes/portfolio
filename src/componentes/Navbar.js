import React, {useState} from "react";
import './Navbar.css';
const curriculum = "https://www.mediafire.com/file/xhvr1i645en0prr/curriculo.pdf/file";
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

    function handleScrollInitial () {
        if (handleScrollInitial)   
        window.scrollTo(0, 0);
        setMenuClass("menu hidden")
        setBurgerClass("burger_bar unclicked")
     }
     function handleScrollContact () {
        if (handleScrollInitial)   
        window.scrollTo(0, 700);
        setMenuClass("menu hidden")
        setBurgerClass("burger_bar unclicked")
     }
     function handleScrollProjects () {
        if (handleScrollInitial)   
        window.scrollTo(0, 2200);
        setMenuClass("menu hidden")
        setBurgerClass("burger_bar unclicked")
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
                        <h2 onClick={handleScrollInitial}>Inicio</h2>
                    </li>
                    <li>
                        <h2 href={curriculum}>Curriculo</h2>
                    </li>
                    <li>
                        <h2 onClick={handleScrollContact}>Contato</h2>
                    </li>
                    <li>
                        <h2 onClick={handleScrollProjects}>Projetos</h2>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;