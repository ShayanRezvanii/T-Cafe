import React from 'react' 
function Product({openModalHandler, name, description, id, image, price}) {

  const handleClick = () => {
    openModalHandler({id, name, description, price, image})
  }

  return (
    <div onClick={handleClick} className=' bg-neutral-300 cursor-pointer hover:bg-orange-300 duration-200 w-full max-w-[360px]   h-[90px] rounded-xl flex items-center relative   z-30'>
        <div className=' bg-white rounded-xl  w-full max-w-[70px] h-[70px] absolute right-4 '>
            <img src={image} />
        </div>
        <div className=' flex-col w-full max-w-[250px] space-y-2'>
            <h1 className='  text-xl text-right font-bold'>{name}</h1>
            <p className=' text-lg text-right'>{description}</p>
        </div>
        <div className=' absolute bg-neutral-500 bottom-0 p-2 rounded-tr-xl rounded-bl-xl text-white   '>{price}T</div>
    </div>
  )
}

export default Product
