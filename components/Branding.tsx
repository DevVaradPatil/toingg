import React from 'react'

const Branding = () => {
    const images = [
        "https://call.toingg.com/images/google-sheets-icon.svg",
        "https://call.toingg.com/images/Calendly.svg",
        "https://call.toingg.com/images/HubSpot.svg",
        "https://call.toingg.com/images/zapier2-1.svg",
        "https://call.toingg.com/images/salesforce.svg",
        "https://call.toingg.com/images/shopify-logo-svgrepo-com.svg",
        "https://call.toingg.com/images/slack.svg"
    ]
  return (
    <div className='flex mt-20 w-full px-[20vw] xs:px-5 flex-col items-center justify-center'>
        <p className='font-medium text-gray-400 text-lg text-center'>Automate your Agent with 5000+ integrations like</p>

        <div className='flex py-10 items-center justify-center gap-10 xs:gap-3'>
            {images.map((image, index) => (
                <div className='w-16 h-16 xs:w-10 xs:h-10'>
                    <img key={index} src={image} alt="logo" className='w-full h-full object-contain'/>
                </div>
            ))}
        </div>

        <div className='my-10'>
        <iframe width="1054" height="745" className='xs:w-full xs:h-[400px]' src="https://www.youtube.com/embed/_La3wQlntgw" title="TOINGG, Imagination is the only boundary." frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    </div>
  )
}

export default Branding