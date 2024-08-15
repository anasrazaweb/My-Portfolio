import NavList from '@/Components/nav-list'
import Logo from '@/Components/ui/Logo'
import React from 'react'

const Navbar = () => {
    return (
        <nav className=' flex justify-between items-center px-20 py-5 '>
            <div>
                <Logo/>
            </div>
            <div>
                <NavList/>
            </div>
        </nav>
    )
}

export default Navbar