import React from 'react'

export const Createproject = ({ show, setShow }) => {
    return (
        <div className=' absolute top-0 bg-black bg-opacity-70 min-h-screen min-w-full z-10'>
            <div className=' my-9 mx-52 min-h-96 bg-purple-50 rounded-lg py-8 px-16  '>

                <h1 className='font-bold text-2xl' >Upload your Project</h1>
                <div className='grid grid-cols-[35%_65%] mt-8'>
                    <div className=' mt-6'>
                        <label htmlFor="thumbnail" className='p-8 border-dashed border-2 cursor-pointer border-slate-400 rounded-lg '>Add thumbnail</label>
                        <input type="file" id='thumbnail' className='hidden' name='thumbail' />
                    </div>
                    <div>
                        <form action="" className='flex flex-col ' >
                            <label htmlFor="title">Title</label>
                            <input className='p-2 outline-none border-2 border-slate-200 rounded-xl' type="text" id='title' />
                            <label htmlFor="description">Description</label>
                            <input className='p-2 outline-none border-2 border-slate-200 rounded-xl' type="text" id='description' />
                            <label htmlFor="livesite">Live Site URL</label>
                            <input className='p-2 outline-none border-2 border-slate-200 rounded-xl' type="text" id='livesite' />
                            <label htmlFor="gibhub">GITHUB URL</label>
                            <input className='p-2 outline-none border-2 border-slate-200 rounded-xl' type="text" id='github' />
                            <div className='mt-6 flex justify-end' >
                            <button onClick={() => setShow(false)} className=' mx-1 font-semibold text-sm py-3 px-6 duration-200 border hover:bg-slate-100 border-slate-400 text-black rounded-full' >Close</button>
                                <button className=' mx-1 font-semibold text-sm py-3 px-6 hover:bg-slate-700 duration-200 bg-slate-950 text-white rounded-full'>
                                    Upload 
                                </button>
                            </div>
                        </form>
                    </div>
                </div>




              
            </div>

        </div>
    )
}
