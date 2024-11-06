import React from 'react'

interface buttonType{
    title:string,
    styles?:string,
    isborder?:boolean,
    onClique?:()=>void
}

const Button = ({title,styles,isborder,onClique}:buttonType) => {
  return (
    <button 
        onClick={onClique}
        className={`rounded-full  text-colorRed ${isborder ? "border-[1px] border-blue-900 text-blue-900":"bg-blue-900  text-white"} w-44 h-12 font-semibold  shadow-md ${styles}`}>
        {title}
    </button>
  )
}

export default Button
