import React from 'react'

const Saftey = () => {
  return (
    <div className='h-screen w-full px-[15vw] xs:px-10 xs:text-center flex justify-center items-center xs:flex-col'>
        <div className='flex gap-5 w-1/2 xs:w-full items-center justify-center xs:flex-col'>
            <img src="https://c.animaapp.com/coXYt0uv/img/security-shield@2x.png" alt="" className='h-20' />

            <div className='flex flex-col items-center justify-center'>
                <p className='text-4xl font-bold xs:text-3xl'>Unwavering Safety & Security</p>
                <p className='text-[12px] mt-2'>With robust internal audits and stringent data governance, we champion the ethical use of AI, ensuring technology serves humanity's best interests. Our commitment sets the foundation for Advanced General Intelligence (AGI) with integrity.</p>
            </div>
        </div>
        <div className='flex flex-col xs:flex-row xs:justify-center xs:items-center gap-10 xs:mt-5 xs:flex-wrap '>
            <div className='flex items-center gap-3 xs:flex-col xs:w-[30vw]'>
                <div className='flex items-center justify-center bg-[#ED6605] rounded-full w-12 h-12 p-2'>
                    <img src="https://call.toingg.com/images/call.svg" alt="" className='w-full h-full object-contain' />
                </div>
                <p className='text-lg'>Prompt Injection</p>
            </div>
            <div className='flex items-center gap-3 xs:flex-col xs:w-[30vw]'>
                <div className='flex items-center justify-center bg-[#ED6605] rounded-full w-12 h-12 p-2'>
                    <img src="https://call.toingg.com/images/promptInjection.svg" alt="" className='w-full h-full object-contain' />
                </div>
                <p className='text-lg'>Call Monitoring</p>
            </div>
            <div className='flex items-center gap-3 xs:flex-col xs:w-[30vw]'>
                <div className='flex items-center justify-center bg-[#ED6605] rounded-full w-12 h-12 p-2'>
                    <img src="https://c.animaapp.com/coXYt0uv/img/scales@2x.png" alt="" className='w-full h-full object-contain' />
                </div>
                <p className='text-lg'>Rate Limits</p>
            </div>
            <div className='flex items-center gap-3 xs:flex-col xs:w-[30vw]'>
                <div className='flex items-center justify-center bg-[#ED6605] rounded-full w-12 h-12 p-2'>
                    <img src="https://c.animaapp.com/coXYt0uv/img/analyze@2x.png" alt="" className='w-full h-full object-contain' />
                </div>
                <p className='text-lg'>Internal Hard Audits</p>
            </div>
        </div>
    </div>
  )
}

export default Saftey