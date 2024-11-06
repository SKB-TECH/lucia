import React from 'react'
import { BannierAbout, SectionIAbout } from '../../components'

const page = () => {
  return (
    <section className='flex flex-col  items-center justify-around h-full w-full gap-6'>
      <BannierAbout/>
      <SectionIAbout/>
    </section>
  )
}

export default page

