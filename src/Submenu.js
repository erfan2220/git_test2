import React, {useEffect, useRef} from 'react';
import {useGlobalContext} from "./Context";
import './Styles/Submenu.css'

function Submenu()
{
    const container = useRef(null)
    const {ismenuopen ,location,page:{page,links} }=useGlobalContext()
    useEffect(()=>{
        const Submenu=container.current;
        const {center,bottom}=location;
        Submenu.style.left= `${center}px`
        Submenu.style.top= `${bottom}px`


    },[location])
    return (
        <aside className={`${ismenuopen?'submenu2' :'submenu'}`}
               ref={container}>
           <h4>{page}</h4>
        </aside>
    );
}

export default Submenu;