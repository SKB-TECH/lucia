import Image from 'next/image'
import React from 'react'
import about from "../assets/about.jpg"
const SectionIAbout = () => {
  return (
    <section className="w-full flex lg:flex-row flex-col justify-between gap-8 container mt-10 ">
      <div className='W-[95%] lg:w-[50%] h-full flex flex-col items-center justify-around gap-2'>
        <Image
            src={about}
            width={700}
            height={700}
            alt='image lucia'
            className='rounded-lg shadow'
        />
      </div>
      <div className='W-[95%] lg:w-[50%] h-full flex flex-col items-center justify-around gap-2'>
        <h2 className='text-xl lg:text-4xl font-bold text-blue-900'>Qui Sommes-nous ?</h2>
        <p className='text-gray-600 leading-6 mt-4'>
            Créée en 2024 et établie au cœur de Goma, dans la province du Nord-Kivu en République Démocratique du Congo, ETS LUCIA  se spécialise dans les services de consultance en banque, la gestion des licences d'import-export, les opérations de dédouanement, ainsi que l’accompagnement pour l'obtention de documents légaux pour les entreprises. En plus de cela, ETS LUCIA  se distingue par ses prestations dans le transport, le nettoyage professionnel, et les services de désinfection et dératisation, répondant aux besoins d’une clientèle variée et exigeante. Nous offrons des solutions complètes et personnalisées pour accompagner les entreprises et les particuliers dans toutes leurs démarches administratives, logistiques et opérationnelles.
        </p>
      </div>
    </section>
  )
}

export default SectionIAbout
