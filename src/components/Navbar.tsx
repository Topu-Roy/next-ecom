import React from 'react'
import { BsCart2, BsSearch } from "react-icons/bs";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { LuUser2 } from 'react-icons/lu'

function Navbar() {
    return (
        <div className="flex justify-between items-center px-8 h-16">
            <div className="w-full flex justify-start items-center space-x-16">

                {/* Logo */}
                <div className=""><a href="/" className="font-bold text-2xl">E-Commerce</a></div>

                {/* Nav Links: Left */}
                <nav className="">
                    <ul className='flex justify-center items-center space-x-16 font-medium'>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/filter">Filters</a></li>
                        <li><a href="/my-products">My Products</a></li>
                    </ul>
                </nav>
            </div>
            <div className="w-full flex justify-end items-center space-x-6">
                <div className="flex justify-center items-center space-x-6 bg-black/5 rounded-full">
                    <div className="pl-4"><BsSearch size="20" /></div>
                    <input
                        type="text"
                        className='outline-none w-full h-10 bg-transparent ml-2 caret-blue-500 placeholder:font-light placeholder:text-gray-600 text-[15px]'
                        placeholder='Search'
                        autoComplete='false'
                    />
                </div>
                <div className="flex justify-center items-center space-x-6">
                    <button className="rounded-full bg-slate-200 h-10 w-10 flex items-center justify-center">
                        <LuUser2 size="20" />
                    </button>
                    <button className="rounded-full bg-slate-200 h-10 w-10 flex items-center justify-center">
                        <BsCart2 size="20" />
                    </button>
                    <button className="rounded-full bg-slate-200 h-10 w-10 flex items-center justify-center">
                        <HiOutlineChevronDown size="20" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar