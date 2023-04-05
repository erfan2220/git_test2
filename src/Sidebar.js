import {useState} from "react";
import {useGlobalContext} from "./Context";
import {FaTimes} from "react-icons/fa";
import {subLinks} from "./Data";
import  './Styles/Sidebar.css'

function Sidebar() {
const { isSidebaropen,closeSidebar } = useGlobalContext()
    return (
      <aside className= {`${isSidebaropen? 
          'sidebar-wrapper2':'sidebar-wrapper'}`}>

          <div className="sidebar">
              <button className='close-btn' onClick={closeSidebar}>
                <FaTimes />
              </button>
              {subLinks.map((sublink,index)=>
              {
                  const {links,page}=sublink
                return (
                    <article key={index}>
                        <h4>{page}</h4>
                        <div className="sidebar-sublink">
                            {links.map((link,index)=>{
                                const {url,label,icon}=link
                                return (<a key={index} href={url}>
                                    {icon}
                                    {label}
                                </a>)
                            })}
                        </div>
                    </article>
                )
              })}
          </div>
      </aside>
    );
}

export default Sidebar;