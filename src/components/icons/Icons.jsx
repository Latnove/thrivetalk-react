import React from 'react'
import icons_SVG from './icons.svg'

export default function Icons({ name, color, size }) {
  return (
    <svg
      className={`icon-${name}`}
      fill={color}
      stroke={color}
      width={size}
      height={size}
    >
      <use href={`${icons_SVG}#${name}`} />
    </svg>
  )
}
