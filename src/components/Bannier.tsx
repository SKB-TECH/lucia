import { CustomButton } from ".";
import { dataService } from "../app/constants";

const Bannier=()=>{
    return(
        <section className='w-full h-full mt-10'>
  <div 
    className="mt-14 text-white lg:h-[36rem] relative -z-52 bar"
    style={{
      //backgroundImage: "url('../assets/bannier.jpg')", // Add your image path
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Add the gradient overlay */}
    <div className='absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent opacity-80'></div>

    <div className='relative px-8 py-16 min-h-full flex flex-col'>
      <div className="lg:container flex flex-col  lg:mt-5 mt-0">
        <div className='w-full lg:w-[60%] flex flex-col lg:gap-14 gap-10 bg-opacity-50'>
            <h1 className="lg:text-6xl text-2xl font-bold w-full text-left">Voyez grand, nous rendons cela possible !</h1>
            <h2 className='text-left text-2xl '>
              Des solutions personnalisées pour votre entreprise. Demandez votre consultation dès maintenant.
            </h2>
           {/* butoon */}
           <CustomButton title="Demander Service" styles="shadow-lg"/>
        </div>
        <div className="absolut flex flex-row flex-wrap w-full justify-around  lg:gap-6 gap-5  mt-5 lg:top-[620px]">
               {
                dataService.map((it,index)=>(
                    <div key={index} className="group transition duration-500 ease-out hover:ease-out hover:scale-95 card lg:w-44 w-[100%] h-44 bg-white flex flex-col justify-between items-center gap-6 py-4 lg:mt-10 shadow-lg z-50 p-2">

                    <div className="flex h-[10%]">
                        {it.icon} {/* Assure-toi que 'it.icon' contient bien une valeur */}
                    </div>
                
                    <div className="h-[90%] w-full mt-2 lg:mt-4">
                        <h5 className="text-[16px] font-semibold text-center text-black/50">
                            {it.title} {/* Assure-toi que 'it.title' contient bien une valeur */}
                        </h5>
                    </div>
                
                </div>
                
                ))
               }
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default Bannier;