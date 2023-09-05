import React, { useState } from "react";
import { IoIosAirplane } from "react-icons/io";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="relative flex flex-wrap items-center justify-evenly px-2 py-3 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <a
                        className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                        href="#pablo"
                    >
                        Travigo
                    </a>
                    <button
                        className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <IoIosAirplane />
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center justify-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col lg:flex-row list-none md:ml-auto my-5  justify-center items-center">
                        <li className="nav-item">
                            <a
                                className="px-3 my-3 py-2 flex lg:bg-transparent bg-slate-100 rounded text-center  items-center text-xs hover:opacity-75"
                                href="#pablo"
                            >
                                <span className="ml-2 text-xl">Home</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="px-3 my-3 py-2 flex lg:bg-transparent bg-slate-100 rounded text-center  items-center text-xs hover:opacity-75"
                                href="#pablo"
                            >
                                <span className="ml-2 text-xl">About</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className="px-3 my-3 py-2 flex lg:bg-transparent bg-slate-100 rounded text-center  items-center text-xs hover:opacity-75"
                                href="#pablo"
                            >
                                <span className="ml-2 text-xl">Pricing</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className="px-3 my-3 py-2 flex lg:bg-transparent bg-slate-100 rounded text-center  items-center text-xs hover:opacity-75"
                                href="#pablo"
                            >
                                <span className="ml-2 text-xl">Contact</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="px-3 my-3 py-2   lg:bg-transparent bg-slate-100 rounded text-center flex items-center text-xs hover:opacity-75"
                                href="#pablo"
                            >
                                <span className="ml-2 text-xl">Blog</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center justify-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="nav-item">
                            <a
                                className="px-3 py-2 flex items-center text-md  text-white hover:opacity-75"
                                href="#pablo"
                            >
                                <button className="btn  px-10 py-4 bg-green-400 rounded-full mx-4">
                                    Login
                                </button>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="px-3 py-2 flex items-center text-md  hover:opacity-75"
                                href="#pablo"
                            >
                                <button className="btn px-10 py-4  text-md bg-slate-100 rounded-full mx-2">
                                    Register
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
