import Link from 'next/link'
import React from 'react'
const links = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Project", path: "/project" },
    { id: 4, name: "Contact us", path: "/contact" },
]

const NavList = () => {
    return (
        <div>
            <ul className=' flex gap-10 font-medium  text-[17px]'>
                {
                    links.map((item) => (
                        <li key={item.id}><Link href={item.path}>{item.name}</Link></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default NavList