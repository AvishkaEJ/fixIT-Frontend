import { Button } from '@nextui-org/react'
import React from 'react'
import bgimage from "../../assets/heroimage.png"

const Hero = () => {
  return (
    <div
      className="hero min-h-[500px]"
      style={{
        backgroundImage: `url(${bgimage})`,
      }}>
      <div className="hero-overlay bg-opacity-0"></div>
      <div className="justify-start min-w-[1250px] text-neutral-content text-left">
        <div className="max-w-xl">
          <h1 className="mb-5 text-6xl font-semibold text-blue2">Welcome to fixIT</h1>
          <p className="mb-5 text-gray-500 text-lg">
            Repair any appliance with fixIT. Submit, track, and manage your repair requests seamlessly, ensuring faster resolutions and better service experiences.
          </p>
          <Button className='bg-green1 text-white font-bold'>Request a Repair</Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
