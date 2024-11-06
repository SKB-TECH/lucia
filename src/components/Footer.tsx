"use client"

import React from "react";
import logo from "../assets/logb.png";
import Image from "next/image";
import { dataFooter } from "../utils/index";
import {useRouter} from "next/navigation";

const Footer =()=> {
    const router = useRouter();

    return (
        <section
            className="relative w-full h-full bg-blue-900 flex flex-col lg:mt-14 mt-10  px-3 md:px-20 3xl:px-36  py-5">
            <div className={"container w-full h-full flex flex-wrap gap-5 lg:flex-row lg:justify-between items-center"}>
                <div className="flex flex-col h-full justify-start items-start gap-2">
                    <Image
                    src={logo}
                    alt='Picture of the author'
                    width={200}
                    height={200}
                        />
                </div>
                <div className="flex flex-col justify-start  gap-6">
                    {
                        dataFooter.slice(0,4).map((item, index) => (
                            <button className={"text-left font-semibold hover:border-b-1 border-white text-white"}
                                    key={index}
                                    onClick={()=>router.push(`${item.page}`)}
                            >
                                {
                                    item.title
                                }
                            </button>
                        ))
                    }
                </div>

                <div className="flex flex-col justify-start gap-6">
                    {
                        dataFooter.slice(4,8).map((item, index) => (
                            <button className={"text-left font-semibold hover:border-b-1 border-white text-white"}
                                    key={index}
                                    onClick={()=>router.push(`${item.page}`)}>

                                {
                                    item.title
                                }
                            </button>
                        ))
                    }
                </div>
                <div className="flex flex-col justify-start gap-6">
                    {
                        dataFooter.slice(4,8).map((item, index) => (
                            <button className={"text-left font-semibold hover:border-b-1 border-white text-white"}
                                    key={index}
                                    onClick={()=>router.push(`${item.page}`)}>

                                {
                                    item.title
                                }
                            </button>
                        ))
                    }
                </div>
            </div>
            <div className={"w-full h-full mt-10 flex flex-col justify-center items-center "}>
                <hr className="border-none h-[1px] bg-gray-200 w-full" />
                <h5 className={"text-sm text-gray-300"}>Copyright © 2024 | Lucia | All Rights Reserved.</h5>
            </div>
        </section>
    );
};


export default Footer;