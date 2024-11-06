import React from 'react'
import { Input, Textarea} from '@chakra-ui/react'
import { CustomButton } from '.'
import { adressData } from '../utils'
import { FaLinkedin,FaTwitter, FaFacebook,FaYoutube} from "react-icons/fa6";

const SectionForm = () => {
  return (
    <section className='bg-grays01 w-full lg:p-10'>
        <div className='flex flex-col lg:flex-row lg:justify-around items-center w-full container py-2 lg:py-0'>
                <div className='w-full flex flex-col gap-4 lg:w-[50%] lg:h-[35rem] h-full lg:mt-3'>
                    <h2 className='text-2xl lg:text-4xl font-bold text-blue-900 '>Entrer En Contact avec Nous </h2>
                    <p>
                    Nous sommes à votre service 24h/24 pour assurer votre satisfaction. Vos droits sont notre devoir.
                    </p>
                    <div className='flex flex-col gap-5'>
                    {
                        adressData.map((items,index)=>(
                            <div className='flex flex-col w-full h-full gap-4' key={index}>
                        <div className='flex flex-row  items-center gap-4'>
                            <div className='w-12 h-12 rounded-full flex  items-center justify-center bg-blue-900'>
                                {
                                    items.icon
                                }
                            </div>
                            <div className='flex flex-col gap-1 '>
                                <h4 className="text-xl  font-bold text-blue-900">{items.titre}</h4>
                                <span>{items.title}</span>
                            </div>
                        </div>
                    </div>
                        ))
                    }
                    </div>
                    <hr className='bg-blue-900 w-full h-[1px]'></hr>
                    <h3 className='text-blue-900'>Pour ne rien rater suivez-nous aussi sur : </h3>
                    <div className='flex gap-4'>
                            <div className='w-12 h-12 rounded-full flex  items-center justify-center bg-blue-900'>
                            <FaLinkedin  color='white' size={25}/>
                            </div>
                            <div className='w-12 h-12 rounded-full flex  items-center justify-center bg-blue-900'>
                            <FaTwitter  color='white' size={25}/>
                            </div>
                            <div className='w-12 h-12 rounded-full flex  items-center justify-center bg-blue-900'>
                            <FaFacebook  color='white' size={25}/>
                            </div>
                            <div className='w-12 h-12 rounded-full flex  items-center justify-center bg-blue-900'>
                            <FaYoutube color='white' size={25}/>
                            </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4 lg:w-[35%] lg:h-[35rem] h-full  bg-white rounded-lg shadow items-center py-4'>
                    <h2 className="text-blue-900 font-bold text-2xl ">Envoyer un Message</h2>
                    <div className='px-4 gap-4 w-full'>
                        <Input variant={"flushed"} placeholder='Noms' className='w-full'/>
                        <Input variant={"flushed"} placeholder='Email' className='w-full mt-10'/>
                        <Input variant={"flushed"} placeholder='Telephone' className='w-full mt-10 '/>
                        <Textarea placeholder='Message ' className='w-full mt-10 h-24' rows={30}/>
                        <p className='mt-2 text-gray-500 text-left text-sm'>
                            {"Après l'envoi du message notre service va te contact pour en parle d'avantage"}
                        </p>
                        <CustomButton title='Envoyer' styles='w-full mt-5 rounded-none'/>
                    </div>
                   
                </div>
        </div>
    </section>
  )
}

export default SectionForm
