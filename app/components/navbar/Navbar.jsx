"use client"

import React, { useContext } from 'react'
import { TfiShoppingCartFull,TfiApple } from "react-icons/tfi";
import { FiShoppingCart } from  "react-icons/fi";
import { useContador } from '@/app/Context/ContadorProdutos';


export default function Navbar() {
 
    const {contador,setContador} = useContador()
    setContador(0)

    return (
        <div className='w-[100%] border-b-[1px] h-[8vh] flex items-center justify-between px-10 text-white bg-zinc-950'>
            <div className='flex flex-row gap-3 items-center'>
            <div><TfiApple size={40} className=""/></div>
            <div><h1 className='text-2xl '>Apple</h1></div>
            </div>
            <div className='flex items-center w-[20%] h-[40px] justify-between shadow-white shadow-sm transition hover:shadow-md hover:shadow-white  gap-5 rounded-full border-[1px] px-10'>
                <div className='cursor-pointer'>Produtos</div>
                <div>|</div>
                <div className='cursor-pointer'>Clientes</div>
            </div>
            <div className='flex flex-col items-center cursor-pointer  h-[87%]'>
                <div className='flex ml-16 items-center justify-center rounded-full h-[20px] w-[27px] bg-white border-zinc-950 text-black border-[1px]'>
                    {contador}
                </div>
                <div>
                    <FiShoppingCart size={30} className=""/>
                </div>
            </div>
        </div>
    )
}
