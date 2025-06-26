import { useToggleMenu } from '@/context/NavbarToggleContext'
import React from 'react'

const ModalMenu = () => {
    const {mobileMenuOpen,setMobileMenuOpen} = useToggleMenu();
  return (
    <div>
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="lg:hidden fixed inset-0 bg-black opacity-25 backdrop-blur-sm top-[112px] left-0 bottom-0 right-0 z-40 "
          aria-hidden="true"
        ></div>
      )}
    </div>
  )
}

export default ModalMenu
