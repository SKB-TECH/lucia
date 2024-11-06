import React from 'react'
import { Bannier, SectionI, SectionII } from '../components'

const page = () => {
  return (
    <section className='flex flex-col  items-center justify-around'>
       <Bannier />
       <div className='!bg-grays w-full h-44 hidden lg:flex'>
       </div>
       <SectionI/>
       <SectionII/>
    </section>
  )
}

export default page
