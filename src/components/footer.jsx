import React from 'react'

const Footer = () => {
  return (
    <div className='tracking-wide'>
    <div className='bg-black p-4'>
    <div className='p-[27.2px]'>
    <p className='text-[white] text-[30px] font-medium text-center'>6000+ Users trust StarClinch.</p>
    <p className='text-[#c8a870] text-center'>Booking Terms & Conditions</p>
    </div>
    <div className='py-[27.2px] text-white text-center'>
    <p className='text-[25.6px] font-medium'>BOOKING TERMS & CONDITIONS FOR CLIENT</p>
    <p className='font-medium'>Advance Fee and Payment Terms</p>
    </div>
    <div className='text-white py-[27.2px]'>
    <p>All acts are subject to availability</p>
    <p>GST @18% will be applicable</p>
    <p>We take an advance of 50% to confirm a show</p>
    <p>Quotation is valid for 14 days and subject to change</p>
    <p>The balance amount needs to be paid 7 days before the show</p>
    <p>TBL (Travel, Boarding & Lodging) will be arranged by the organizer</p>
    <p>Tech-Rider (sound, stage & lighting) will be arranged by the organizer</p>
    <p>EMI is applicable for payments made by Credit Cards only</p>
    </div>
    </div>
    <div className='p-4'>
      <img className='w-[250px] p-[10px]' src="data:image/png;base64,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"></img>
      <div className='flex ml-[70px]'>
      <img className='w-[20px] h-[20px] mr-6' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Facebook_icon_%28black%29.svg/1024px-Facebook_icon_%28black%29.svg.png"></img>
      <img className='w-[20px] h-[20px] mr-6' src="https://cdn-icons-png.flaticon.com/512/733/733635.png"></img>
      <img className='w-[20px] h-[20px] mr-6' src="https://www.iconpacks.net/icons/1/free-youtube-icon-123-thumb.png"></img>
      <img className='w-[20px] h-[20px]' src="https://cdn-icons-png.flaticon.com/512/87/87390.png"></img>
    </div>
    <div className='flex justify-between mt-[32px] text-[#41c1a9]'>
      <div>
        <p className='text-[20px] font-medium text-black'>FOR BUYERS</p>
        <p>Our Buyers</p>
        <p>Browse</p>
        <p>Post Your Requirement</p>
        <p>Entertainment on EMI</p>
        <p className='text-[20px] font-medium text-black mt-3'>ABOUT US</p>
        <p>Our Story</p>
        <p>Careers</p>
      </div>
      <div>
        <p className='text-[20px] font-medium text-black'>FOR BUYERS</p>
        <p>Our Buyers</p>
        <p>Browse</p>
        <p>Post Your Requirement</p>
        <p>Entertainment on EMI</p>
        <p className='text-[20px] font-medium text-black mt-3'>ABOUT US</p>
        <p>Our Story</p>
        <p>Careers</p>
      </div>
    </div>
    <div className='mt-3'>
      <p className='font-medium text-[20px]'>REGISTERED OFFICE</p>
      <p className='font-medium text-[20px]'>ADDRESS :</p>
      <p>VINSM Globe Private Limited</p>
      <p>Percept House, Ground Floor</p>
      <p>East of Kailash, New Delhi</p>
      <p>CIN: U52605DL2012PTC236944</p>
      <p>Phone: +91 11 498 498 01</p>
      <p className='text-[#41c1a9] mt-1'>Contact Us</p>
    </div>
    <img className='mt-16 mx-auto' src="/visa.png"></img>
    <div className='text-[15px] text-center mx-auto items-center justify-center mb-4'>
      <span>@ Copyright 2015-2023 | </span><span className='text-[#41c1a9]'>VINSM Globe Pvt Ltd</span><span> | All Rights Reserved.</span>
    </div>
    </div>
    </div>
  )
}

export default Footer