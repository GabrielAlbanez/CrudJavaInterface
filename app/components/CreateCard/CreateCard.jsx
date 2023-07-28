"use client"
export default function CreateCard() {
  return (
    <div className='bg-zinc-950 h-[100vh] text-white flex flex-row items-center justify-between  '>
    <div className=' h-[100%] w-[51%] border-slate-100 border-r-[1px] flex flex-col justify-center pt-4 '>
      <div className='text-2xl  flex justify-center h-[4%]'>Criar Clientes</div>
      <div className='h-[98%] flex items-center justify-center mb-10'>
        <form action="" onSubmit={() => { }} className=" flex flex-col items-center justify-center gap-20 border-[1px] border-white rounded-lg h-[70%] w-[50%] shadow-md shadow-white">
          <div className='w-[85%] border-white border-[1px] flex items-center justify-center h-[9%] rounded-full transition shadow-white shadow-md hover:shadow-lg hover:shadow-white '><input type="text" placeholder='nome..' className='w-[93%] rounded-full h-[60%] border-white outline-0 bg-transparent p-3' /></div>
          <div className='w-[85%] border-white border-[1px] flex items-center justify-center h-[9%] rounded-full transition shadow-white shadow-md hover:shadow-lg hover:shadow-white '><input type="text" placeholder='cpf' className='w-[93%] rounded-full h-[60%] border-white outline-0 bg-transparent p-3' /></div>
          <div className='w-[85%] border-white border-[1px] flex items-center justify-center h-[9%] rounded-full transition shadow-white shadow-md hover:shadow-lg hover:shadow-white '><input type="text" placeholder='sexo' className='w-[93%] rounded-full h-[60%] border-white outline-0 bg-transparent p-3' /></div>
          <div className='w-[85%] border-white border-[1px] flex items-center justify-center h-[9%] rounded-full transition shadow-white shadow-md hover:shadow-lg hover:shadow-white '><input type="text"  placeholder='img de perfil (insira um url)' className='w-[93%] rounded-full h-[60%] border-white outline-0 bg-transparent p-3' /></div>
        </form>
      </div>


    </div>

    <div className=' h-[100%] w-[49%] flex flex-col justify-center pt-4 '>
    <div className='text-2xl  flex justify-center h-[4%]'>Criar Produtos</div>
      <div className='h-[98%] flex items-center justify-center mb-10'>
        <form action="" onSubmit={() => { }} className=" flex flex-col items-center justify-center gap-20 border-[1px] border-white rounded-lg h-[70%] w-[50%]  shadow-md shadow-white">
          <div className='w-[85%] border-white border-[1px] flex items-center justify-center h-[9%] rounded-full transition shadow-white shadow-md hover:shadow-lg hover:shadow-white '><input type="text" placeholder='nome..' className='w-[93%] rounded-full h-[60%] border-white outline-0 bg-transparent p-3' /></div>
          <div className='w-[85%] border-white border-[1px] flex items-center justify-center h-[9%] rounded-full transition shadow-white shadow-md hover:shadow-lg hover:shadow-white '><input type="text" placeholder='descrição..' className='w-[93%] rounded-full h-[60%] border-white outline-0 bg-transparent p-3' /></div>
          <div className='w-[85%] border-white border-[1px] flex items-center justify-center h-[9%] rounded-full transition shadow-white shadow-md hover:shadow-lg hover:shadow-white '><input type="text" placeholder='preço' className='w-[93%] rounded-full h-[60%] border-white outline-0 bg-transparent p-3' /></div>
          <div className='w-[85%] border-white border-[1px] flex items-center justify-center h-[9%] rounded-full transition shadow-white shadow-md hover:shadow-lg hover:shadow-white '><input type="text"  placeholder='img de perfil (insira um url)' className='w-[93%] rounded-full h-[60%] border-white outline-0 bg-transparent p-3' /></div>
        </form>
      </div>

    </div>
  </div>
  )
}
