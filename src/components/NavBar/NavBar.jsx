import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
const NavBar = () => {
    const array = ['Procesadores', 'Memorias Ram', 'Discos']
    return (
        <header>
            <nav>
                <div>
                    <a className="inicio" href="#"><img src="../src/assets/React.png" width="50px" alt="" /></a>
                    {
                        array.map((a) => (
                            <a href="#">{a}</a>
                        ))
                    }
                    <CartWidget className="cartwidget"/>
                </div>
            </nav>

        </header>
    )
}

export default NavBar