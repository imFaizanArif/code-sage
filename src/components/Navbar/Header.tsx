import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className="shadow-2xl shadow-primary border-b-[0.1px] border-primary bg-background body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Image src="/logo.png" alt="logo" width={35} height={35} />
                    <span className="ml-3 bg-gradient-to-r from-stext to-etext text-transparent bg-clip-text text-2xl font-semibold">Code Sage</span>
                </Link>
            </div>
        </header>
    )
}

export default Header