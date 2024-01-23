"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";
import NavItem from '../utils/NavItems';
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Verification from "./Auth/Verification";

import Image from "next/image";
import CustomModal from "../utils/customModel";

const Navbar = ({ activeItem, setOpen, route, open, setRoute }) => {
    const [active, setActive] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);
    const [userData, setUserData] = useState({});


    if (typeof window !== "undefined") {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 85) {
                setActive(true);
            } else {
                setActive(false);
            }
        });
    }

    const handleClose = (e) => {
        if (e.target.id === "screen") {
            {
                setOpenSidebar(false);
            }
        }
    };

    return (
        <>
            <div className="relative w-full">
                <div className={`h-[80px] z-[80] w-full shadow-[0_0_30px_0_rgba(156,51,83,.2)]  
                ${active ? "fixed top-0 left-0 transition duration-1000 scroll-smooth"
                        : ""
                    }`}
                >
                    <div className="w-[98%] h-full py-2 m-auto 800px:w-[98%] box-border">
                        <div className="flex items-center justify-between w-full h-full 800px:justify-normal">
                            <div className="self-center">
                                <Link href={'/'}>
                                    <Image className="m-0" alt='HopeFund-Logo' width={170} height={60}
                                        src={require("../../public/assets/logoo.png")} />
                                </Link>
                            </div>
                            <div className="flex ml-auto align-middle 800px:ml-6">
                                <NavItem activeItem={activeItem} isMobile={false} />
                                {/* only for mobile */}

                            </div>
                            <div className="flex ml-auto">
                                {/* {userData ? (
                                    <Link href={"/profile"}>
                                        <Image
                                            src={userData?.user.avatar ? userData.user.avatar.url : avatar}
                                            alt=""
                                            width={30}
                                            height={30}
                                            className="w-[30px] h-[30px] rounded-full cursor-pointer"
                                            style={{ border: activeItem === 5 ? "2px solid #37a39a" : "none" }}
                                        />
                                    </Link>
                                ) : ( */}
                                <HiOutlineUserCircle
                                    size={45}
                                    className="mr-5 800px:mr-2 text-[#9c3353] cursor-pointer block"
                                    onClick={() => setOpen(true)}
                                />
                                <HiOutlineMenuAlt3
                                    size={45}
                                    className="text-[#9c3353] cursor-pointer block 800px:hidden"
                                    onClick={() => setOpenSidebar(true)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* mobile sidebar */}
                    {openSidebar && (
                        <div
                            className="fixed w-full h-screen top-0 left-0 z-[99999]  bg-[#00000056]"
                            onClick={handleClose}
                            id="screen"
                        >
                            <div className="w-[70%] fixed z-[999999999] h-screen bg-white top-0 right-0">
                                <NavItem activeItem={activeItem} isMobile={true} />
                                {/* {userData?.user ? (
                                    <Link href={"/profile"}>
                                        <Image
                                            src={userData?.user.avatar ? userData.user.avatar.url : avatar}
                                            alt=""
                                            width={30}
                                            height={30}
                                            className="w-[30px] h-[30px] rounded-full ml-[20px] cursor-pointer"
                                            style={{ border: activeItem === 5 ? "2px solid #37a39a" : "none" }}
                                        />
                                    </Link>
                                ) : ( */}
                                {/* <HiOutlineUserCircle
                                        size={25}
                                        className="hidden text-[#9c3353] cursor-pointer 800px:block"
                                        onClick={() => setOpen(true)}
                                    /> */}
                                {/* )} */}
                                <br />
                                <br />
                                <p className="text-[16px] font-bold px-2 pl-5 text-black">
                                    Copyright © 2024 HopeFund
                                </p>
                            </div>
                        </div>
                    )}
                </div>
                {route === "Login" && (
                    <>
                        {open && (
                            <CustomModal
                                open={open}
                                setOpen={setOpen}
                                setRoute={setRoute}
                                activeItem={activeItem}
                                component={Login}
                                // refetch={refetch}
                            />
                        )}
                    </>
                )}
                {route === "Sign-Up" && (
                    <>
                        {open && (
                            <CustomModal
                                open={open}
                                setOpen={setOpen}
                                setRoute={setRoute}
                                activeItem={activeItem}
                                component={SignUp}
                                // refetch={refetch}
                            />
                        )}
                    </>
                )}
                {route === "Verification" && (
                    <>
                        {open && (
                            <CustomModal
                                open={open}
                                setOpen={setOpen}
                                setRoute={setRoute}
                                activeItem={activeItem}
                                component={Verification}
                                // refetch={refetch}
                            />
                        )}
                    </>
                )}
            </div>
        </>
    );
};

export default Navbar;
