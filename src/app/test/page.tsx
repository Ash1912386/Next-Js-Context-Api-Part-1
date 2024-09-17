"use client"

import React, { useContext } from 'react'
import { CountContext } from '../context'

const Test = () => {
    const ab = useContext(CountContext)
  return (
    <div>
        {ab.count}
    </div>
  )
}

export default Test
