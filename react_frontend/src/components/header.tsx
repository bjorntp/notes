import React from 'react'
import { Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="flex justify-around items-center border-b border-b-gray-400 min-h-[7vh]">
        <h1>LOGO HERE</h1>
        <button className="bg-blue-300 w-24 h-12">Login</button>
      </header>
      <Outlet />
    </>
  )
}

export default Header;
