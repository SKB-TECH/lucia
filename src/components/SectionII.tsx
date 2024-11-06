import React from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import Image from 'next/image'
import about from "../assets/about.png"
import { CiCircleCheck } from "react-icons/ci";
import { pourquoi } from '../utils';

const SectionII = () => {
  return (
    <section className='flex w-full flex-col items-center justify-center gap-5 bg-grays py-10 lg:h-[42rem]'>
      <div className='flex h-12 w-80 flex-row items-center justify-center gap-4 rounded-full bg-white shadow'>
        <h3 className='text-center font-bold text-blue-900'>
          {' '}
          Pour quoi Choisir{' '}
          <span className='font-bold text-blue-600'>Lucia</span> ?
        </h3>
        <MdArrowDropDown size={28} className='rotate-180' color='#1f398a' />
      </div>
     
      <div className='container flex h-full flex-col items-center justify-between gap-4 lg:py-4 lg:flex-row'>
        <div className='flex flex-col gap-4 h-full w-[100%] rounded-tl-3xl lg:w-[50%] lg:mt-10'>
        <h4 className=' text-gray-600 leading-7 lg:w-[550px] lg:text-lg'>
       <span className='text-blue-600 font-bold'>Lucia </span> {
          'vous aide à naviguer à travers les complexités administratives et réglementaires, en simplifiant vos opérations pour que vous puissiez vous concentrer sur l’essentiel.'
        }
      </h4>
           {
            pourquoi.map((it,index)=>(
                <div key={index} className='flex items-center gap-2 mt-2'>
                <CiCircleCheck size={25} color='#1f398a'/>
                <p className='text-lg  text-gray-600'>{it.title}</p>
           </div>
            ))
           }
        </div>
        <div className='h-full w-[100%] rounded-tl-3xl bg-white  lg:w-[50%]'>
          <Image
            src={about}
            alt='img'
            className='w-full h-full rounded-lg shadow-md'
            content=""
          />
        </div>
      </div>
    </section>
  )
}

export default SectionII
