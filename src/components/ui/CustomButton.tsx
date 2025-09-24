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
    <span className={`flex-1 ${textStyles} flex gap-3 items-center`}>
        {title}
        {rightIcon && (
          <span className=''> 
            <Image 
            height={20} 
            width={20}
            src={rightIcon} 
            alt='right-icon'
              className='object-cover'
            />
          
          </span>
        )}
    </span>
   </button>
  )
}

export default CustomButton
