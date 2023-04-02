import airbnb from "./airbnb.svg"
export default function Navbar(){
    return(
        <nav className="navbar">
            <img src={airbnb} alt="airbnb" className="airbnb--img"/>
        </nav>
    )
}