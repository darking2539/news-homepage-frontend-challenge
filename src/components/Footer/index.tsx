import React from 'react'
import GamingImage from '../../assets/images/image-gaming-growth.jpg'
import RetroImage from '../../assets/images/image-retro-pcs.jpg'
import LabtopImage from '../../assets/images/image-top-laptops.jpg'

export default function index() {

  const data: any = [
    {
      "no": "01",
      "title": "Reviving Retro PCs",
      "detail": "What happens when old PCs are given modern upgrades?",
      "image": RetroImage
    },
    {
      "no": "02",
      "title": "Top 10 Laptops of 2022",
      "detail": "Our Best picks for various needs and budgets.",
      "image": LabtopImage
    },
    {
      "no": "03",
      "title": "The Growth of Gaming",
      "detail": "How the pandemic has sparked fresh opportunities.",
      "image": GamingImage
    },
  ]
  return (
    <div className='flex flex-col md:flex-row justify-between pt-10 md:px-6 font-sans'>
      {data.map((item: any) => (
        <div className='pb-7 flex grow'>
          <div className='flex justify-start'>
            <div className='md:hidden xl:flex'>
              <img className='nd:w-[130px] md:h-[100%] md:max-w-[100%] max-w-[90px] w-[120px]' src={item.image} />
            </div>
            <div className='flex flex-col mx-3'>
              <div className='text-[26px] text-gray-300 font-bold'>{item.no}</div>
              <div className='mt-2 text-base font-extrabold whitespace-nowrap'>{item.title}</div>
              <div className='mt-2 text-xs text-gray-400 font-base'>{item.detail}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
