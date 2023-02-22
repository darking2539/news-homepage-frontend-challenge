import React from 'react'
import imageDesktop from '../../assets/images/image-web-3-desktop.jpg'
import imageMobile from '../../assets/images/image-web-3-mobile.jpg'

export default function index() {
  return (
    <div className='flex mt-10'>
      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-12 md:col-span-8 xl:col-span-8 font-sans'>
          <img className='md:flex hidden' src={imageDesktop} />
          <img className='md:hidden' src={imageMobile} />
          <div className='grid grid-cols-12 gap-4 py-6 md:px-6'>
            <div className='col-span-12 md:col-span-6'>
              <div className='lg:text-5xl text-4xl font-bold'>The Bright Future of Web 3.0?</div>
            </div>
            <div className='col-span-12 md:col-span-6'>
              <div className='flex flex-col justify-start items-start px-2'>
                <div className='text-xs text-gray-500 '>
                  We dive into the next evolution of the web that claims to put the power of the
                  platforms back into the hands of the people. Butis it really fullfilling its promise?
                </div>
                <button className='mt-5 border py-2 px-8 bg-red-500 text-white text-md tracking-[4px]'>READ MORE</button>
              </div>
            </div>
          </div>
        </div>

        <div className='col-span-12 md:col-span-4 xl:col-span-4 bg-gray-900 text-white p-6 font-sans'>
          <div className='text-3xl font-bold text-yellow-400'>New</div>

          <div className='pt-6 pb-7 border-b border-gray-400'>
            <div className='text-base font-bold'>Hydrogen VS Electric Cars</div>
            <div className='text-md font-base text-gray-400 mt-1'>Will hydrogen-fueled cars ever catch up to Evs?</div>
          </div>

          <div className='pt-6 pb-7 border-b border-gray-400'>
            <div className='text-base font-bold'>The Downsides of AI Artistry</div>
            <div className='text-md font-base text-gray-400 mt-1'>What are the possible adverse effects of on-demand AI image generation?</div>
          </div>

          <div className='pt-6'>
            <div className='text-base font-bold'>Is VC Funding Drying Up?</div>
            <div className='text-md font-base text-gray-400 mt-1'>Private funding by VC firms is down 50% YOY. We tak a look at what that means.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
