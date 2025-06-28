'use client'
import { createContext, ReactNode, useContext, useState } from "react";

type MenuContextType = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    searchItem: boolean;
  setSearchItem: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const ContextToggleProvider = ({children}: {children: ReactNode}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchItem, setSearchItem] = useState(false)


    return(
        <MenuContext.Provider value={{mobileMenuOpen,setMobileMenuOpen,searchItem,setSearchItem}}>
            {children}
        </MenuContext.Provider>
    );
};

export const useToggleMenu = () => {
    const context = useContext(MenuContext);
    if(!context) throw new Error("toggle context error")
        return context;
}
