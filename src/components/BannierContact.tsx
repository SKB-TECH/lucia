import React from 'react'

const BannierContact = () => {
  return (
    <section className='w-full h-full mt-10'>
        <div 
    className="mt-14 text-white lg:h-[34rem] relative -z-52 con"
    style={{
      //backgroundImage: "url('../assets/bannier.jpg')", // Add your image path
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className='absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent opacity-80'></div>
          <div className='relative px-8 py-16 min-h-full flex flex-col'>
      <div className="lg:container flex flex-col  lg:mt-5 mt-0">
        <div className='w-full flex flex-col items-center justify-center lg:gap-14 gap-10 bg-opacity-50'>
            <h1 className="lg:text-6xl text-2xl font-bold w-full text-center">Contactez-nous</h1>
            <h2 className='text-center font-semibold text-2xl lg:w-[50%] '>
            Prêt à faire évoluer votre entreprise ? Contactez-nous pour une consultation sur mesure !
            </h2>
        </div>
      </div>
    </div>
        </div>
    </section>
  )
}

export default BannierContact
