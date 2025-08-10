import React from 'react'
import Logo from './Logo'
import NavSearch from './NavSearch'
import DarkMode from './DarkMode'
import ListDropdown from './ListDropdown'
import SignoutButton from './SignoutButton'

const Navbar = () => {
  return (
    <nav className="border-b p-4 shadow-sm ">
        <div className="container flex flex-col flex-wrap px-2 sm:flex-row sm:justify-between sm:items-center">
            <Logo />
            <NavSearch />
            <div className="flex items-center space-x-4">
            <DarkMode />
            <ListDropdown/>
            <SignoutButton/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar