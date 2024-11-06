import React from 'react'
import { offre } from '../assets'
import Image from 'next/image'
import { MdArrowDropDown, MdOutlineCall } from 'react-icons/md';
import { CustomButton } from '.';

const SectionI = () => {
  return (
    <section className='container w-full lg:h-[40rem]  lg:mt-10'>
        <div className='lg:conainter   flex lg:flex-row flex-col  w-full h-full '>
            <div className='lg:w-[50%] w-[100%] h-full '>
                <Image src={offre} width={500} height={500} alt='image'/>
            </div>
            <div className='lg:w-[50%] w-[100%] h-full flex flex-col py-4 items-start gap-5 lg:mt-24'>
                <div className='w-80 h-12 shadow bg-white rounded-full flex flex-row gap-4 items-center justify-center '>
                   <h3 className='text-blue-900 font-bold text-center'> Qui sommes-nous ?</h3>
                   <MdArrowDropDown size={28} className='rotate-180'  color="#1f398a"/>
                </div>
                <h2 className='text-2xl font-bold text-blue-900 '>
                Boostez la Croissance de Votre Entreprise avec Nos Services  <span className='text-blue-700'>de Consultance</span>
                </h2>
                <div className='w-full  flex flex-row gap-2'>
                    <div className='h-24 w-[4px] bg-blue-900'/>
                    <p className='text-gray-500 text-justify leading-7'>
                        <span className='text-blue-700 font-bold'>Lucia</span>,vous offrons des services de consultance personnalisés pour aider les entreprises à
                        réussir leur transformation. Nous travaillons étroitement avec vous pour comprendre vos besoins et proposer
                        des solutions innovantes
                    </p>
                </div>
                <div className='w-full border-t-2 border-b-2 border-grays lg:h-16 flex flex-col lg:flex-row items-center justify-center gap-4'>
                    <CustomButton title='Reserver Rendez-vous' styles='w-56'/>
                    <span className='w-12 h-12 border-[2px] border-[#1f398a] rounded-full p-2 text-center '>
                        <MdOutlineCall size={24} color='#1f398a'/>
                    </span>
                    <div className='flex flex-col'>
                        <span className='text-blue-900 font-semibold text-center lg:text-left'>Appel direct</span>
                        <span>+243 977423201</span>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SectionI