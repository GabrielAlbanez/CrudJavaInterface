"use client"

import React, { createContext, useContext, useState } from 'react'


const Contador = createContext()

export default function ContadorProvider({children}) {
    const [contador,setContador] = useState(null)







  return (
    <Contador.Provider value={{contador,setContador}}>
       {children}
    </Contador.Provider>
  )
}

export function useContador(){
 return useContext(Contador)
}
