import TeamComp from '@/components/teamComp'
import React from 'react'

const TeamSec = () => {
  const doctorData = [
    {
      image: 'team_member_one.webp',
      name: 'Jeffery Mussman'
    },
    {
      image: 'team_member_two.avif',
      name: 'Peter Parker'
    },
    {
      image: 'team_member_three.avif',
      name: 'Thomas Voltas '
    },
    {
      image: 'team_member_four.jpg',
      name: 'Noah Anderson'
    }
  ]
  
  return (
    <div className='bg-white px-6 py-10 sm:px-12 sm:py-16 lg:px-10 lg:py-20'>
      <div className='flex flex-col justify-center items-center'>
        <div className='bg-green-200 text-center text-sm sm:text-base lg:text-btnSize font-bold px-4 py-2 rounded-full'>
          Behind the Scene
        </div>
        <div className='text-center text-2xl sm:text-3xl lg:text-h2 font-semibold mt-4'>
          Our <span className='text-bg_color_primary text-3xl sm:text-4xl lg:text-h1 font-light allison_regular'>Team</span>
        </div>
        <div className='text-center leading-8 text-p w-full sm:w-[550px] mt-8 mb-8 font-medium px-4'>
          Qui culpa qui consequat officia cillum quis irure aliquip ut dolore sit eu culpa ut irure nisi occaecat dolore adipisicing do pariatur.
        </div>
      </div>
      
      <div className='  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-5'>
        {doctorData.map((data, id) => (
          <TeamComp key={id} image={data.image} name={data.name} />
        ))}
      </div>
    </div>
  )
}

export default TeamSec
