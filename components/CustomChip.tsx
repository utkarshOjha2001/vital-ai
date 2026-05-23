'use client';
import React from 'react'
import clsx from 'clsx';
import { variantStyles, sizeStyles, dotStyles } from '@/constants/chipConstants';

function CustomChip({
  variant = 'primary',
  size = 'sm',
  className,
  title = "",
  ...props

}: CustomChipProps) {
  return (
    <div className={clsx(
      `
      flex items-center gap-3
      rounded-2xl
      `
      ,
      className,
      variant && variant in variantStyles ? variantStyles[variant as keyof typeof variantStyles] : '',
      sizeStyles[size]
    )}

      {...props}
    >
      {variant !== 'none' && dotStyles[variant] &&
      <div className={`w-2.5 h-2.5 rounded-[50%] ${dotStyles[variant]} `}/>
      }
      
      <div>
        {title}
      </div>
    </div>
  )
}

export default CustomChip;
