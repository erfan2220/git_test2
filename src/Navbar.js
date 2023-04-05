import './Styles/Navbar.css'
import {useState} from "react";
import {subLinks} from "./Data";
import {useGlobalContext} from "./Context";
import {FaBars} from "react-icons/fa";
import Submenu from "./Submenu"




const Navbar = ()=>
{

        const {isSidebaropen,ismenuopen,
                closeSubemenu,openSubemenu,
                openSidebar,closeSidebar} = useGlobalContext();

        const displaymenu=(e)=>
        {
                const page = e.target.textContent;
                const tempbtn=e.target.getBoundingClientRect()
                const center=(tempbtn.left+tempbtn.right)/2

                const bottom=tempbtn.bottom -3;

                openSubemenu(page,{center,bottom})

        }
        return (
                <div className="navbar-show">
                <div className="left">
                <p>Stripe</p>
                </div>
                <div className="middle">
                    <ul className="nav-link">
                            <li>
                                    <button className="link-btn" onMouseOver={displaymenu}>dscsd</button>
                                    <button className="link-btn" onMouseOver={displaymenu}>sdds</button>
                                    <button className="link-btn"onMouseOver={displaymenu}>sds</button>
                            </li>
                    </ul>
                </div>
                <div className="right">
                    <button className="submenu-btn" onClick={openSidebar}><FaBars /></button>
                </div>
            </div>
        )

}

export default Navbar;