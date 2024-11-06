'use client'
import React, { useEffect, useState } from "react";
import logo from "../assets/logs.png"
import {
    AiOutlineClose,
    AiOutlineMenu,
} from "react-icons/ai";
import Image from "next/image";
import { CustomButton } from ".";
import Link from "next/link";
import { useRouter } from "next/navigation";

// fin items
const Navbar = () => {

    // const [opens, setOpens] = useState(false);
    // const [opense, setOpense] = useState(false);
    const [active, setActive] = useState(false);
    const [isScroll, setIsScroll] = useState(false);
    const router=useRouter()

    


   
    const listenScrollEvent = () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        window.scrollY > 10 ? setIsScroll(true) : setIsScroll(false);
    };

    const handlClic = () => {
        setActive(!active);
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);



    return (
        <div
            className={`fixed  w-full h-24 bg-white z-[100] flex items-center justify-center top-0 left-0 right-0  py-10  ${isScroll && "z-[100]  bg-white border-b-2"
            }`}>
            <div className='container flex items-center justify-between  w-full h-full'>
                <div className='cursor-pointer  h-full flex items-center justify-center'>
                    <Image 
                        src={logo}
                        alt='Picture of the author'
                        width={400}
                        height={400}
                        className="w-[200px] h-[200px]"
                        content="cover"
                    />
                </div>
                <div className='hidden ml-32 lg:flex items-center justify-center    h-full p-6'>
                    <ul className='flex items-center justify-center  w-full gap-12 h-full p-6 '>
                        <li className="hover:text-blue-900 hover:cursor-pointer cursor-pointer hover:text-colorRed text-gray-500 font-semibold ">
                            <Link href={"/"}>Accueil</Link>
                        </li>
                        <li className="hover:text-blue-900 hover:cursor-pointer cursor-pointer hover:text-colorRed text-gray-500 font-semibold ">
                            <Link href={"/service"}>Services</Link>
                        </li>
                        <li className="hover:text-blue-900 hover:cursor-pointer cursor-pointer hover:text-colorRed text-gray-500 font-semibold  ">
                            <Link href={"/about"}>Apropos</Link>
                        </li>
                        <li className="hover:text-blue-900 hover:cursor-pointer cursor-pointer hover:text-colorRed text-gray-500 font-semibold ">
                            <Link href={"/blog"}>Blog</Link>
                        </li>
                    </ul>
                </div>
                <div className='md:flex-1 text-xl mr-2 ml-20'>
                    <div className='cursor-pointer z-1000 md:hidden' onClick={handlClic}>
                        <AiOutlineMenu size={30} />
                    </div>
                </div>
                <div className="hidden lg:flex flex-row justify-end gap-5">
                    <CustomButton title="Nous Contacter" isborder={true} onClique={()=>router.push("/contact")}/>
                    <CustomButton title="Connexion"/>
                </div>
            </div>
            <div
                className={
                    active ? "md:fixed top-0 left-0 w-full h-screen bg-black/70 z-10" : ""
                }>
                <div
                    className={
                        active
                            ? "fixed top-0 left-0 w-[75%] md:w-[45%] h-screen bg-white p-4 ease-in duration-500"
                            : "fixed left-[-100%] top-0 p-10 ease-in duration-500 z-0"
                    }>
                    <div className='flex items-center justify-between z-[1000]'>
                        <div className=''>
                            <Image
                                src={logo}
                                alt='Picture of the author'
                                width={100}
                                height={100}
                            />
                        </div>
                        <div
                            onClick={handlClic}
                            className='p-2 mr-2 rounded-full shadow-lg cursor-pointer shadow-gray-400'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className='my-4 border-b border-gray-300'>
                        <div className='flex items-center     h-full p-6'>
                        <ul className='flex flex-col   w-full gap-12 h-full p-2'>
                            <li className="hover:text-blue-900 hover:cursor-pointer cursor-pointer hover:text-colorRed text-gray-500 font-semibold ">
                                <Link href={"/"} onClick={handlClic}>Accueil</Link>
                            </li>
                            <li className="hover:text-blue-900 hover:cursor-pointer cursor-pointer hover:text-colorRed text-gray-500 font-semibold ">
                                <Link href={"/service"} onClick={handlClic}>Services</Link>
                            </li>
                            <li className="hover:text-blue-900 hover:cursor-pointer cursor-pointer hover:text-colorRed text-gray-500 font-semibold  ">
                                <Link href={"/about"} onClick={handlClic}>Apropos</Link>
                            </li>
                            <li className="hover:text-blue-900 hover:cursor-pointer cursor-pointer hover:text-colorRed text-gray-500 font-semibold ">
                                <Link href={"/blog"} onClick={handlClic}>Blog</Link>
                            </li>
                        </ul>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default Navbar;