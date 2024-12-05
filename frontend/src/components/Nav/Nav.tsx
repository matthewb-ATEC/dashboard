import { useState } from 'react'
import NavTab from './NavTab'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-br from-atec-light to-atec md:px-24 lg:px-48">
      <div className="w-full flex justify-between items-center px-8 p-4 md:py-4 md:px-0">
        {/* Logo */}
        <img
          className="h-12 max-w-full object-contain"
          src="/images/ATEC-logo-white.png"
          alt="AdvanceTEC"
        />

        {/* Hamburger Menu Icon (visible on small screens) */}
        <button
          className="flex items-center text-center block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <i className="material-icons text-white text-4xl">menu</i>
        </button>
      </div>
      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:flex flex-col pb-2 md:pb-0 md:flex-row md:space-x-8 md:items-center text-white`}
      >
        <NavTab name="Dashboard" link="" />
      </div>
    </div>
  )
}

export default Nav
