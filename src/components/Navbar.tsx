import React from 'react'

function Navbar() {
    return (
        <div className="">
            <div className="">
                <div className=""><a href="/" className="">E-commerce</a></div>
                <nav className="">
                    <ul>
                        <li><a className='' href="/shop">Shop</a></li>
                        <li><a className='' href="/filter">Filters</a></li>
                        <li><a className='' href="/my-products">My Products</a></li>
                    </ul>
                </nav>
            </div>
            <div className=""></div>
        </div>
    )
}

export default Navbar