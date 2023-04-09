import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Homepage = () => {

    const [data,setData] = useState([])
    const [selected,setSelected] = useState()

    useEffect(()=>{
        axios.get("https://63e9b70a811db3d7efffb3b2.mockapi.io/api/v1/star_clinch").then((response)=>{
            setData(response.data)
            setSelected(Array(response.data.length).fill(false));
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    const handleSelect = (index) => {
        const newSelected = [...selected];
        newSelected[index] = !newSelected[index];
        setSelected(newSelected);
    };

  return (
    <div className='tracking-wide'>
        {/* navbar */}
        <div className='h-[70px] bg-black '>
            <div className='flex justify-between pl-2 pr-4  my-auto h-full'>
            <img className='w-[160px] h-[40px] my-auto' src="/logo.png"></img>
            <p className='text-[white] my-auto'>Hello, Manish</p></div>
        </div>
        {/* shortlist details */}
        <div className='font-roboto'>
            <p className='text-[40px] font-bold ml-2 mt-2'>Shortlist</p>
            <p className='ml-2 text-[20px] text-[grey]'>Details :</p>
        </div>
        <div className='flex flex-wrap justify-between px-6 pt-1'>
            <span className='text-center'>
                <p className='text-[30px] font-medium'>Event Date</p>
                <p className='text-[18px]'>2023-02-22</p>
            </span>
            <div>
                <p className='text-[30px] font-medium'>Location</p>
                <p className='text-[18px]'>Delhi, India</p>
            </div>
        </div>
        <p className='mt-2 text-[25px] font-medium text-center tracking-wide'>Budget</p>
        <div className='flex flex-col items-center justify-center'><button className='bg-black rounded-[7px] text-[25px] mt-1 font-bold px-3 py-2 text-[white] mx-auto'>₹500,000</button></div>
        <p className='text-[40px] font-bold ml-2 mt-2 text-center'>Singers</p>
        <div className='text-center text-[18px]'><p>Select an artist that</p><p>matches your vibe</p></div>
        <div className='mt-10 lg:grid lg:grid-cols-3'>
            {/* mapping the data */}
            {data.map((e,index)=>{
                return(
                    <div key={index} className='mb-8 relative mb-[320px]'>
                        <img className='rounded-t-[30px] w-[90%] h-[300px] object-cover mx-auto' src={e.image}></img>
                        <div className='text-[white] absolute z-10 left-0 right-0 mt-[-30px] w-[90%] mx-auto rounded-[30px] bg-cover bg-[url("https://static.vecteezy.com/system/resources/thumbnails/000/600/523/small/BG57.jpg")] pt-5'>
                            <div className='text-center'>
                            <p className='text-[30px] font-bold'>{e.name}</p>
                            <p>{e.type}</p>
                            </div>
                            <div className='px-5'>
                            <p>{e.location}</p>
                            <div className="flex justify-between">
                                <p>{e.event}</p>
                                <i>{e.number}</i>
                            </div>
                            <div className='flex px-10 py-6'>
                                <img className='w-[50px] h-[50px] mr-2 cursor-pointer' src={e.image}></img>
                                <img className='w-[50px] h-[50px] mr-2 cursor-pointer' src="https://pyxis.nymag.com/v1/imgs/e23/394/dea8a6f0b6fe464969f038e2d1427423d1-selena-gomez.1x.rsquare.w1400.jpg"></img>
                                <img className='w-[50px] h-[50px] mr-2 cursor-pointer' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rihanna-elle-4-1643885208.jpg?crop=0.636xw:0.695xh;0.189xw,0.0685xh&resize=640:*"></img>
                                <img className='w-[50px] h-[50px] mr-2 cursor-pointer' src="https://pyxis.nymag.com/v1/imgs/e23/394/dea8a6f0b6fe464969f038e2d1427423d1-selena-gomez.1x.rsquare.w1400.jpg"></img>
                                </div>
                            </div>
                            <button onClick={()=>handleSelect(index)} className={`w-full rounded-b-[30px] border border-[grey] ${selected[index] ? "bg-[grey]" : "bg-black"} text-[25px] text-white py-3 text-center`}>{selected[index] ? "SELECTED" : "SELECT"}</button>
                        </div>
                        </div>
                )
            })}
        </div>
    </div>
  )
}

export default Homepage