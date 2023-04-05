

import React, {useContext, useState} from 'react';
import {subLinks} from "./Data";
import { createContext } from 'react';

const AppContext = createContext()

export const AppProvider = ({children})=> {
    const [isSidebaropen,setIsSidebaropen]=useState(false);
    const [ismenuopen,setIsmenuopen]=useState(true);
    const [location,setLocation]=useState({})
    const [page,setPage]=useState({page:'',links:[]})
    const openSidebar=()=>
    {
        setIsSidebaropen(true);

    }
    const closeSidebar=()=>
    {
        setIsSidebaropen(false);

    }
    const openSubemenu = (text,coordinates)=>
    {
        const page = subLinks.find((link) => link.page === text)
        console.log(page)
        setLocation(coordinates)
        setIsmenuopen(true);
    }
    const closeSubemenu=()=>
    {
        setIsmenuopen(false);
    }
return <AppContext.Provider value={
    { isSidebaropen,ismenuopen,
        closeSubemenu,openSubemenu,
        openSidebar,closeSidebar,location,page}}>
    {children}
</AppContext.Provider>
}

export const useGlobalContext=()=>
{
    return useContext(AppContext);
}