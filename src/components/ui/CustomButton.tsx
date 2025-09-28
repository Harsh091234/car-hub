import React from 'react'
import { CustomButtonProps } from '../../../types'
import Image from 'next/image'


const CustomButton = ({title, containerStyles, handleClick, btnType, rightIcon, textStyles} : CustomButtonProps) => {
  return (
   <button 
   disabled={false}
   type={btnType || "button"}
   className={`custom-btn ${containerStyles}`}
   onClick={handleClick}>
    <span className={`flex-1 ${textStyles} flex gap-1.5 md:gap-3 items-center`}>
        {title}
        {rightIcon && (
          <span className=''> 
            <Image 
            height={17} 
            width={17}
            src={rightIcon} 
            alt='right-icon'
              className='object-cover md:w-6 h-6'
            />
          
          </span>
        )}
    </span>
   </button>
  )
}

export default CustomButton
