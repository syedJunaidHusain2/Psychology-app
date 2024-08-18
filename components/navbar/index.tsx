import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/contact'>Contact</Link>
                <Image width={400} height={400} loading='lazy' src='/img.png' alt='img' />
            </nav>
        </div>
    )
}

export default Navbar