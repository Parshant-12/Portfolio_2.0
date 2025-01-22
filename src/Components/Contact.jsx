import React from 'react'
function Contact() {
    return (
        <div className='text-white h-auto container m-auto flex flex-col items-center justify-center py-32'>
            <div className='border-2 border-[#584f68] sm:w-[400px] w-[320px] rounded-2xl flex flex-col items-center px-4 py-4 text-center'>
                <div >
                    <h1 className='text-5xl animate-infinite-glow pb-2'>Contact</h1>
                </div>
                <form action="https://api.web3forms.com/submit" method="POST" className='w-full h-full sm:px-6 px-2 py-3 flex flex-col items-center justify-center gap-8'>
                    <input type="hidden" name="access_key" value="db1f61d3-aa9a-41f1-be40-542d0ac61e2e"/>
                    <input name="name" className='bg-transparent border-2 border-[#584f68] rounded-full py-3 px-4 w-full  transition-all duration-200' type="text" placeholder='Name' required/>
                    <input name="email" className='bg-transparent border-2 border-[#584f68] rounded-full py-3 px-4 w-full transition-all duration-200' type="email" placeholder='Email' required/>
                    <textarea name="message" className='h-[120px] bg-transparent border-2 border-[#584f68] rounded-3xl py-2 px-4 w-full transition-all duration-200' placeholder='Write message' required></textarea>
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }}/>
                    <button type="submit" className='text-xl font-medium w-full bg-[#886fb8] border-2 border-[#886fb8] rounded-full py-2 px-3 hover:scale-105 transition-all duration-200 hover:shadow-[0_0_20px_#886fb8]'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
