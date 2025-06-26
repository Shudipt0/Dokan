'use client'
import { createContext, ReactNode, useContext, useState } from "react";

type MenuContextType = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const ContextToggleProvider = ({children}: {children: ReactNode}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return(
        <MenuContext.Provider value={{mobileMenuOpen,setMobileMenuOpen}}>
            {children}
        </MenuContext.Provider>
    );
};

export const useToggleMenu = () => {
    const context = useContext(MenuContext);
    if(!context) throw new Error("toggle context error")
        return context;
}
